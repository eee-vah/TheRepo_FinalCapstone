import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  //READ (GET)
  getItems(): Observable<Item[]> {
    const url = `${this.apiUrl}/item`;
    return this.http.get<Item[]>(url);
  }
}
