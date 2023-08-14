import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http:HttpClient) { }

  getBeer(){
    return this.http.get<Beer[]>("https://api.sampleapis.com/beers/ale");
  }

}
