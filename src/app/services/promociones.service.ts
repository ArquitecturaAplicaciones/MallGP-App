import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promocion } from '../models/promociones';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  constructor(private http: HttpClient) { }

  getPromociones(){
    return this.http.get<Promocion[]>("http://localhost:3000/promociones")
  }

  getPromocion(id:number){
    return this.http.get<Promocion>("http://localhost:3000/promociones"+"/"+id.toString());
  }

  addPromocion(ppromocion:Promocion){
    return this.http.post<Promocion>("http://localhost:3000/promociones",ppromocion);
  }

  updatePromocion(ppromocion:Promocion){
    return this.http.put<Promocion>("http://localhost:3000/promociones"+"/"+ppromocion.id.toString(),ppromocion);
  }
  

}
