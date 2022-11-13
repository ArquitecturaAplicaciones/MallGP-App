import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AforoComponent } from './components/aforo/aforo.component';
import { HelpMallComponent } from './components/help-mall/help-mall.component';
import { MapsMallComponent } from './components/maps-mall/maps-mall.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSugerenciaComponent } from './components/add-sugerencia/add-sugerencia.component';
import { DetallePromocionComponent } from './components/detalle-promocion/detalle-promocion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginAdminComponent,
    HomeComponent,
    NavbarComponent,
    AforoComponent,
    HelpMallComponent,
    MapsMallComponent,
    NovedadesComponent,
    PromocionesComponent,
    SugerenciasComponent,
    TiendasComponent,
    AddSugerenciaComponent,
    DetallePromocionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
