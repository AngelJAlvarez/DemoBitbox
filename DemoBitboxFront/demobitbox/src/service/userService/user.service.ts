import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http: HttpClient) { }

  readonly url = environment.Url;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'getUsers');
  }

  deleteUser(id: number) {
    return this.http.post<number>(this.url + 'deleteUser', id);
  }

  newUser(newUser: User) {
    return this.http.post<User>(this.url + 'createUser', newUser);
  }

  editUser(editUser: User) {
    return this.http.post<User>(this.url + 'editUser', editUser);
  }
}
