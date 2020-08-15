import { LoginService } from './../../service/loginService/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserLogin } from 'src/models/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  user: UserLogin;
  showLoginFailMsg: boolean;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    if (this.loginService.getlogIn()) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }

  }

  login() {
    this.user = {username: this.formLogin.get('user').value, password: this.formLogin.get('password').value };
    this.loginService.authorization(this.user).subscribe(data => {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        localStorage.setItem('token', data.token);
      } else {
        localStorage.setItem('token', data.token);
        this.router.navigate(['home']);
      }

    }, error => {
      this.showLoginFailMsg = true;
    });
  }

}
