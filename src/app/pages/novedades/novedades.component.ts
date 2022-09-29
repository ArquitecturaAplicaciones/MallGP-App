import { Component, OnInit } from '@angular/core';
import { Novedades } from 'src/app/models/novedades';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  constructor() { }

  novedades: Novedades[] = [
    {
      id: 1,
      texto: "Este viernes se presenta un grupo de rock en el patio de comidas"
    },
    {
      id: 2,
      texto: "Por tu compra con un monto de 100 soles en cualquiera de nuestras tiendas participa en la ruleta de preguntas y gana premios"
    },
    {
      id: 3,
      texto: "Este sabado por feria Smart Fit no abrira sus puertas"
    }
  ]

  ngOnInit(): void {
  }

}
