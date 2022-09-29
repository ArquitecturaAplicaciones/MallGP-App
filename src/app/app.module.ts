import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AforoComponent } from './pages/aforo/aforo.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { MapsMallComponent } from './pages/maps-mall/maps-mall.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { HelpMallComponent } from './pages/help-mall/help-mall.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AforoComponent,
    PromocionesComponent,
    MapsMallComponent,
    NovedadesComponent,
    SugerenciasComponent,
    HelpMallComponent,
    AjustesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
