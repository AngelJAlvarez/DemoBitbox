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

  constructor(private loginService: LoginService,
              private router: Router,
              private itemService: ItemService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));

    this.formItemCreate = this.fb.group({
      itemCode: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null]
    });

    this.formItemEdit = this.fb.group({
      itemCode: [null, [Validators.required]],
      description: [null, [Validators.required]],
      state: ['Active', [Validators.required]],
      price: [null]
    });

    this.getItems();

    if (this.loginService.getlogIn()) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }

  logOut() {
    this.loginService.logout();
  }

  getItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
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
        this.getItems();
        modal.hide();
        this.formItemCreate.reset();
      }
    });
  }


  showEditModal(item: Item, modal: ModalDirective) {
    this.itemSelectedToEdit = item;
    this.formItemEdit.get('itemCode').setValue(item.code);
    this.formItemEdit.get('state').setValue(item.state);
    this.formItemEdit.get('price').setValue(item.price);
    this.formItemEdit.get('description').setValue(item.description);
    this.editModal = modal;
    this.editModal.show();
  }

  showDeleteModal(item: Item, modal: ModalDirective) {
    this.itemSelectedToDelete = item;
    this.deleteModal = modal;
    this.deleteModal.show();
  }

  confirmDelete() {
    this.itemService.deleteItem(this.itemSelectedToDelete.id).subscribe(data => {
      if (data) {
        this.getItems();
        this.deleteModal.hide();
      }
    });
  }

  confirmEdit() {
    this.itemSelectedToEdit.price = this.formItemEdit.get('price').value;
    this.itemSelectedToEdit.state = this.formItemEdit.get('state').value;
    this.itemSelectedToEdit.description = this.formItemEdit.get('description').value;
    this.itemService.editItem(this.itemSelectedToEdit).subscribe(data => {
       if (data) {
        this.getItems();
        this.editModal.hide();
      }
     });
  }

}
