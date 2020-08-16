import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Token } from 'src/models/token';
import { Role } from 'src/models/role';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = environment.loginUrl;
  user: User;
  roles: Role;

  constructor(private http: HttpClient) { }

  authorization(user): Observable<Token> {
    return this.http.post<Token>(this.url, user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getlogIn() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    const current = new Date();
    const timestamp = current.getTime();
    if (decodedToken.exp * 1000 >= timestamp) {

      return true;

    } else {

      this.logout();

      return false;
    }
  }

  getActiveUser() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    this.user = new User();
    this.user.username = decodedToken.sub;
    this.user.roles = decodedToken.roles;
    return this.user;
  }

  getRolUser() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
     
    return decodedToken.roles;
  }

}
