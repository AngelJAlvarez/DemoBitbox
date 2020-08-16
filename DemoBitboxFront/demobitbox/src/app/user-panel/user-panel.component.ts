import { UserService } from './../../service/userService/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/loginService/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective, ModalBackdropComponent } from 'angular-bootstrap-md';
import { Role } from 'src/models/role';
import { AlertService } from 'src/service/alertService/alert.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  editField: string;
  userList: User[];
  formUserCreate: FormGroup;
  newUser = new User();
  newRole: Role[];
  createUsermodal: ModalDirective;
  formUserEdit: FormGroup;
  editUser = new User();
  editUsermodal: ModalDirective;
  userToEdit: User;

  constructor(private loginService: LoginService,
              public router: Router,
              private userService: UserService,
              private fb: FormBuilder,
              private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.loginService.getlogIn()) {
      this.router.navigate(['users']);
    } else {
      this.router.navigate(['login']);
    }

    this.formUserCreate = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      userRol: [{value: true, disabled: true}, [Validators.required]],
      adminRol: [false, [Validators.required]],
    });

    this.formUserEdit = this.fb.group({
      username: [null, [Validators.required]],
      userRol: [{value: true, disabled: true}, [Validators.required]],
      adminRol: [false, [Validators.required]],
    });

    this.getUsers();

  }

  remove(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      if (data) {
      this.alertService.showSuccess('Successful removal', 'User removal');
      this.getUsers();
    }}, error => {
      this.alertService.showError('Error: You cannot remove users with associated items ', 'User remove');
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {this.userList = data; });
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  showCreateUserModal(modal: ModalDirective) {
    this.createUsermodal = modal;
    this.createUsermodal.show();
  }

  showEditUserModal(modal: ModalDirective, userToEdit: User) {
    this.userToEdit = userToEdit;
    console.log(this.userToEdit);
    if (this.userToEdit.roles.find(element => element.name === 'ADMIN')) {
      this.formUserEdit.get('adminRol').setValue(true);
    } else {
      this.formUserEdit.get('adminRol').setValue(false);
    }
    this.formUserEdit.get('username').setValue(this.userToEdit.name);
    this.editUsermodal = modal;
    this.editUsermodal.show();
  }

  ConfirmCreateUserModal() {
    this.newUser.name = this.formUserCreate.get('username').value;
    this.newUser.password = this.formUserCreate.get('password').value;
    if (!this.formUserCreate.get('adminRol').value) {
      this.newUser.roles = [{name: 'USER'}];
    } else {
      this.newUser.roles = [{name: 'USER'}, {name: 'ADMIN'}];
    }
    this.userService.newUser(this.newUser).subscribe(data => {
      if (data) {
        this.alertService.showSuccess('Successful creation', 'User creation');
        this.createUsermodal.hide();
      }
    }, error => {
      this.alertService.showError('Error: You cannot create users with the same username', 'User creation');
    });
  }

  ConfirmEditUserModal() {
    this.editUser.name = this.formUserEdit.get('username').value;
    this.editUser.id = this.userToEdit.id;
    if (!this.formUserEdit.get('adminRol').value) {
      this.editUser.roles = [{name: 'USER'}];
    } else {
      this.editUser.roles = [{name: 'USER'}, {name: 'ADMIN'}];
    }
    this.userService.editUser(this.editUser).subscribe(data => {
      if (data) {
        this.alertService.showSuccess('Successful edit', 'User edit');
        this.editUsermodal.hide();
      }
    }, error => {
      this.alertService.showError('Error', 'User edit');
    });

  }

}
