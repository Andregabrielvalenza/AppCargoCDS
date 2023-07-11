import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargadosPaquetesPage } from './cargados-paquetes.page';

const routes: Routes = [
  {
    path: '',
    component: CargadosPaquetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargadosPaquetesPageRoutingModule {}
