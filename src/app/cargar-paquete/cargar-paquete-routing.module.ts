import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarPaquetePage } from './cargar-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: CargarPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarPaquetePageRoutingModule {}
