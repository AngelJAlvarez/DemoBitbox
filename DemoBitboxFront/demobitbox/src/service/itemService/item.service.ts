import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { States } from 'src/models/enum';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemInformation: Item;
  constructor(private http: HttpClient) { }
  readonly url = environment.Url;

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + 'getItems');
  }

  getItemsByState(state: string) {
    if (state === 'Active') {
      return this.http.get<Item[]>(this.url + 'getActiveItems');
    } else {
      return this.http.get<Item[]>(this.url + 'getDiscontinuedItems');
    }
  }

  getItemToMoreInfo() {
    return this.itemInformation;
  }
  setItemToMoreInfo(item: Item) {
    this.itemInformation = item;
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
  deactivationItem(item) {
    return this.http.post<number>(this.url + 'editItem', item);
  }
}
