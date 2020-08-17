import { Supplier } from './../../models/supplier';
import { DeactivatedItem } from './../../models/deactivatedItem';
import { AlertService } from './../../service/alertService/alert.service';
import { UserService } from './../../service/userService/user.service';
import { ItemService } from './../../service/itemService/item.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/loginService/login.service';
import { Item } from '../../models/item';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Creator } from 'src/models/creator';
import { States } from '../../models/enum';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalDirective } from 'angular-bootstrap-md';
import { User } from 'src/models/User';
import { PriceReduction } from 'src/models/priceReduction';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<Item>;
  formItemCreate: FormGroup;
  formItemEdit: FormGroup;
  newItem = new Item();
  username = this.loginService.getActiveUser().username;
  UserInformation = this.loginService.getActiveUser();
  newCreator: Creator;
  itemSelectedToDelete: Item;
  deleteModal: ModalDirective;
  itemSelectedToEdit: Item;
  editModal: ModalDirective;
  adminOption: boolean;
  users: User[];
  creator: Creator;
  deactivationModal: ModalDirective;
  itemSelectedToDeactivation: Item;
  formDiscontinued: FormGroup;
  checkBoxActive = false;
  checkBoxDiscontinued = false;
  deactivatedItem = new DeactivatedItem();
  creatorToDeactivation: Creator;
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
  priceReductions: PriceReduction[];
  priceReductionsToEdit = new PriceReduction();
  checkOverlaping: boolean;
  suppliers: Supplier[];
  errorEdite: boolean;

  constructor(private loginService: LoginService,
              public router: Router,
              private itemService: ItemService,
              private userService: UserService,
              private fb: FormBuilder,
              private alertService: AlertService) { }

  ngOnInit(): void {

    if (this.loginService.getlogIn()) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }

    this.itemService.getSupplier().subscribe(data => {
      this.suppliers = data;
    }, error => {
      this.alertService.showError('Error loading Supplier', 'Item load');
    });

    this.itemService.getPriceReductions().subscribe(data => {
      this.priceReductions = data;
    }, error => {
      this.alertService.showError('Error loading PriceReductions', 'Item load');
    });

    if (this.loginService.getRolUser().find(element => element.authority === 'ROLE_ADMIN')) {
      this.adminOption = true;
    } else {
      this.adminOption = false;
    }
    this.formItemCreate = this.fb.group({
      itemCode: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: [null, [Validators.required]],
      price: [null, [Validators.pattern('^[0-9]*$')]]
    });

    this.formDiscontinued = this.fb.group({
      description: [null, [Validators.required]]
    });

    this.formItemEdit = this.fb.group({
      itemCode: [{value: null, disabled: true}, [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: [null, [Validators.required]],
      creator: [null, [Validators.required]],
      price: [null, [Validators.pattern('^[0-9]*$')]],
      reducedPrice: [null],
      startDate: [null],
      endDate: [null],
      supplier: ['']
    });

    this.getItemsAndUser();

  }

  logOut() {
    this.loginService.logout();
  }

  getItemByFilter() {
    if ((this.checkBoxActive && this.checkBoxDiscontinued) || (!this.checkBoxActive && !this.checkBoxDiscontinued)) {
      this.getItems();
    } else if (!this.checkBoxActive && this.checkBoxDiscontinued) {
      this.getItemByState('Discontinued');
    } else {
      this.getItemByState('Active');
    }

  }

  getItemByState(state: string) {
    this.itemService.getItemsByState(state).subscribe(data => {
      this.items = data;
    }, error => {
      this.alertService.showError('Error filtering the items', 'Item filtering');
    });
  }

  getItemsAndUser() {
    this.getItems();
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      if (this.adminOption) {
        this.alertService.showError('Error loading users', 'Users load');
      }
    });
  }

  getItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    }, error => {
      this.alertService.showError('Error loading items', 'Item load');
    });
  }

  createItem(modal: ModalDirective) {
    this.newCreator = new Creator();
    this.newCreator.name = this.username;
    this.newItem.code = this.formItemCreate.get('itemCode').value;
    this.newItem.description = this.formItemCreate.get('description').value;
    this.newItem.price = this.formItemCreate.get('price').value;
    this.newItem.state = States.Active;
    this.newItem.creator = this.newCreator;
    this.itemService.newItem(this.newItem).subscribe(data => {
      if (data) {
        this.getItemByFilter();
        modal.hide();
        this.formItemCreate.reset();
        this.alertService.showSuccess('Successful creation', 'Item creation');
      }
    }, error => {
      this.alertService.showError('Error: You cannot repeat the same item code', 'Item creation');
    });
  }

  showEditModal(item: Item, modal: ModalDirective) {
    this.itemSelectedToEdit = item;
    this.formItemEdit.get('itemCode').setValue(item.code);
    this.formItemEdit.get('price').setValue(item.price);
    this.formItemEdit.get('description').setValue(item.description);
    this.formItemEdit.get('creator').setValue(item.creator.id);
    this.editModal = modal;
    this.editModal.show();
  }

  showDeleteModal(item: Item, modal: ModalDirective) {
    this.itemSelectedToDelete = item;
    this.deleteModal = modal;
    this.deleteModal.show();
  }

  showDiscontinuedModal(item: Item, modal: ModalDirective) {
    this.itemSelectedToDeactivation = item;
    this.deactivationModal = modal;
    this.deactivationModal.show();
  }

  confirmEdit() {
    this.checkOverlaping = true;
    this.priceReductionsToEdit.startDate = this.formItemEdit.get('startDate').value;
    this.priceReductionsToEdit.endDate = this.formItemEdit.get('endDate').value;
    this.priceReductionsToEdit.reducedPrice = this.formItemEdit.get('reducedPrice').value;
    this.itemSelectedToEdit.price = this.formItemEdit.get('price').value;
    this.itemSelectedToEdit.description = this.formItemEdit.get('description').value;
    this.creator = new Creator();
    this.creator.id = this.formItemEdit.get('creator').value;
    this.itemSelectedToEdit.creator = this.creator;
    this.itemSelectedToEdit.priceReduction.forEach(priceReductionInItem => {
      let e2start = new Date(priceReductionInItem.startDate);
      let e2end = new Date(priceReductionInItem.endDate);
      let e1start = new Date(this.priceReductionsToEdit.startDate);
      let e1end = new Date(this.priceReductionsToEdit.endDate);
      if ((e1start > e2start && e1start < e2end || e2start > e1start && e2start < e1end)) {
        this.checkOverlaping = false;
      }
    });
    if (this.checkOverlaping) {
      if (this.priceReductionsToEdit.endDate !== null
          && this.priceReductionsToEdit.startDate !== null
          && this.priceReductionsToEdit.reducedPrice !== null) {
            if (this.priceReductionsToEdit.startDate > this.priceReductionsToEdit.endDate) {
              this.errorEdite = true;
            } else {
              this.errorEdite = false;
              // tslint:disable-next-line: max-line-length
              this.itemSelectedToEdit.priceReduction.push({startDate: this.priceReductionsToEdit.startDate, endDate: this.priceReductionsToEdit.endDate, reducedPrice: this.priceReductionsToEdit.reducedPrice});
            }
          }
      if (this.formItemEdit.get('supplier').value) {
        if (this.itemSelectedToEdit.suppliers.find(element => element.name === this.formItemEdit.get('supplier').value) === undefined) {
          // tslint:disable-next-line: max-line-length
          this.itemSelectedToEdit.suppliers.push(this.suppliers.find(element => element.name === this.formItemEdit.get('supplier').value));
          this.itemService.editItem(this.itemSelectedToEdit).subscribe(data => {
            if (data) {
             this.getItemByFilter();
             this.editModal.hide();
             this.formItemEdit.get('supplier').setValue(null);
             this.alertService.showSuccess('Successful edit', 'Item Edit');
           }
          }, error => {
           this.alertService.showError('An error has occurred', 'Item Edit');
         });
        } else {
          this.alertService.showError('This Supplier already are asociated with the item', 'Item Edit');
        }
      } else {
        if (this.errorEdite) {
          this.alertService.showError('You cannot select a start date higher than the end date', 'Item Edit');
        } else {
          this.itemService.editItem(this.itemSelectedToEdit).subscribe(data => {
            if (data) {
             this.getItemByFilter();
             this.editModal.hide();
             this.alertService.showSuccess('Successful edit', 'Item Edit');
           }
          }, error => {
           this.alertService.showError('An error has occurred', 'Item Edit');
         });
        }
      }
    } else {
      this.alertService.showError('A reduced price already exists on that date', 'Item Edit');
    }
  }

  confirmDelete() {
    this.itemService.deleteItem(this.itemSelectedToDelete.id).subscribe(data => {
      if (data) {
        this.getItemByFilter();
        this.deleteModal.hide();
      }
    }, error => {
      this.alertService.showError('An error has occurred', 'Item delete');
    });
  }

  confirmDeactivation() {
    this.creatorToDeactivation = new Creator();
    this.creatorToDeactivation.id = 0;
    this.creatorToDeactivation.name = this.decodedToken.sub;
    this.deactivatedItem.reasonForDeactivation = this.formDiscontinued.get('description').value;
    this.deactivatedItem.item = this.itemSelectedToDeactivation;
    this.deactivatedItem.user = this.creatorToDeactivation;
    this.itemService.deactivationItem(this.deactivatedItem).subscribe(data => {
      if (data) {
        this.getItemByFilter();
        this.deactivationModal.hide();
        this.alertService.showSuccess('Successful Deactivation', 'Item Deactivation');
      }
    }, error => {
      this.alertService.showError('An error has occurred', 'Item Deactivation');
    });
  }

  setItemToMoreInfo(item: Item) {
    this.itemService.setItemToMoreInfo(item);
    this.router.navigate(['moreInfo']);
  }

}
