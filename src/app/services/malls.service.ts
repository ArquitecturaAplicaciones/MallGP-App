import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mall } from '../models/mall'; 
@Injectable({
  providedIn: 'root'
})
export class MallsService {

  constructor(private http:HttpClient) { }

  getMalls(){
    return this.http.get<Mall[]>("http://localhost:3000/malls")
  }


}
