import { environment } from './../../environments/environment';
import { Novedades } from 'src/app/models/novedades';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

   resourcePath: string = environment.serverJSON+environment.resourceNovedades;
  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get<Novedades[]>(this.resourcePath)
  }
}
