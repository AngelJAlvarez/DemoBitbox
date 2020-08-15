import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  readonly url = environment.itemUrl;


  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + 'getItems');
  }

  newItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url + 'createItem', item);
  }

  deleteItem(id: number) {
    return this.http.post<number>(this.url + 'deleteItem', id);
  }
  editItem(item: Item) {
    return this.http.post<number>(this.url + 'editItem', item);

  }
}
