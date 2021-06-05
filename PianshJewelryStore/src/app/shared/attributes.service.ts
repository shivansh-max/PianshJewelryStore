import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get("http://127.0.0.1:5000/get-all")
  }
}
