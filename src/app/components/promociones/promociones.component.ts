import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Promocion } from 'src/app/models/promociones';
import { PromocionesService } from 'src/app/services/promociones.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedGenero: string = "todos";
  promoView: Promocion[] = [];
  newPromoView: Promocion[] = [];

  constructor(private PromoServices:PromocionesService) { }

  ngOnInit(): void {

    this.filtrarGenero();
    this.getPromocion();
    
  }

  getPromocion():void{

    this.PromoServices.getPromociones().subscribe(
      respuesta => {
        this.promoView=respuesta;
      }
    )
   
  };

  filtrarGenero(): void {
    
    if (this.selectedGenero != "todos"){
      this.newPromoView = this.promoView.filter( promocion => promocion.gender_product == this.selectedGenero)
      this.promoView = this.newPromoView
    } else {
      this.promoView = this.promoView
    }

  }

}
