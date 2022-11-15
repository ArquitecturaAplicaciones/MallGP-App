import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AforoComponent } from './components/aforo/aforo.component';
import { HelpMallComponent } from './components/help-mall/help-mall.component';
import { HomeComponent } from './components/home/home.component';
import { MapsMallComponent } from './components/maps-mall/maps-mall.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { AddSugerenciaComponent } from './components/add-sugerencia/add-sugerencia.component';
import { DetallePromocionComponent } from './components/detalle-promocion/detalle-promocion.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path:'tiendas', 
    component:TiendasComponent
  },
  {
    path: 'aforo',
    component: AforoComponent,
  },
  {
    path: 'promociones',
    component: PromocionesComponent,
  },
  {
    path: 'maps-mall',
    component: MapsMallComponent,
  },
  {
    path: 'novedades',
    component: NovedadesComponent,
  },
  {
    path: 'sugerencias',
    component: SugerenciasComponent,
  },
  {
    path: 'help-mall',
    component: HelpMallComponent,
  },
  
  {
    path: 'login-admin',
    component: LoginAdminComponent,
  },

  {
    path: 'add/sugerencia',
    component: AddSugerenciaComponent,
  },
  {
    path: 'detalle/producto',
    component: ProductComponent,
  },
  {
    path: 'detalle/promocion',
    component: DetallePromocionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
