import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wine } from '../model/wine.model';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http:HttpClient) { }
  
  getWine(){
    return this.http.get<Wine[]>("https://api.sampleapis.com/wines/reds");
  }
}
