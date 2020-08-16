import { ItemService } from 'src/service/itemService/item.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/loginService/login.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})

export class ItemInfoComponent implements OnInit {

  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
  item: Item;

  constructor(private itemService: ItemService,
              private loginService: LoginService,
              public router: Router) { }

  ngOnInit(): void {

    if (this.itemService.getItemToMoreInfo() == null) {
      this.router.navigate(['home']);
    } else {
      this.item = this.itemService.getItemToMoreInfo();
      console.log(this.item)
    }
  }

  logOut() {
    this.loginService.logout();
  }

}
