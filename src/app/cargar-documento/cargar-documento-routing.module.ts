import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarDocumentoPage } from './cargar-documento.page';

const routes: Routes = [
  {
    path: '',
    component: CargarDocumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarDocumentoPageRoutingModule {}
