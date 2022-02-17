import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
   
  fetchData() {
    return this.http.get('./categories.json').subscribe( (data) => console.log(data));
  }

}
