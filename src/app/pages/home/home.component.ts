import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Mall } from 'src/app/models/mall';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedCiudad: string = "todos";
  mallsView: Mall[] = [];
  newMallView: Mall[] = [];
  

  malls: Mall[] = [
    {
      id: 1,
      nombre: "Larcomar",
      direccion: "Malecón de la Reserva 610, Miraflores 15074",
      ciudad: "Miraflores",
      img: "larcomar.jpg"
    },
    {
      id: 2,
      nombre: "Plaza San Miguel",
      direccion: "Lima 32, San Miguel 15088",
      ciudad: "San Miguel",
      img: "plaza_san_miguel.jpg"
    },
    {
      id: 3,
      nombre: "Mall del Sur",
      direccion: "Avenida Los Lirios 310, San Juan de Miraflores 15801",
      ciudad: "San Juan de Miraflores",
      img: "mall_del_sur.webp"
    },
    {
      id: 4,
      nombre: "Plaza Norte",
      direccion: "Av. Tomas Valle, Independencia 15311",
      ciudad: "Independencia",
      img: "plaza_norte.jpg"
    },
    {
      id: 5,
      nombre: "Jockey Plaza",
      direccion: "Psje. Ontario, Santiago de Surco 15023",
      ciudad: "Santiago de Surco",
      img: "jockey_plaza.jpg"
    },
    {
      id: 6,
      nombre: "Mega Plaza",
      direccion: "Av. Alfredo Mendiola 3698, Independencia 15311",
      ciudad: "Independencia",
      img: "mega_plaza.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.mallsView = this.malls;
    this.filtrarCiudades()
  }

  filtrarCiudades(): void {
    
    if (this.selectedCiudad != "todos"){
      this.newMallView = this.malls.filter( mall => mall.ciudad == this.selectedCiudad)
      this.mallsView = this.newMallView
    } else {
      this.mallsView = this.malls
    }

  }


}
