import { environment } from './../../environments/environment';
import { Tienda } from '../models/tienda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  constructor(private http:HttpClient) { }

  resourcePath: string = environment.serverJSON+environment.resourceTiendas;
  getTiendas(){
    return this.http.get<Tienda[]>(this.resourcePath)
  }
}
