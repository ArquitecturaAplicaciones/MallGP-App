import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { HelpMallComponent } from './pages/help-mall/help-mall.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { MapsMallComponent } from './pages/maps-mall/maps-mall.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { AforoComponent } from './pages/aforo/aforo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
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
    path: 'ajustes',
    component: AjustesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
