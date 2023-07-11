import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentosCargadosPage } from './documentos-cargados.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentosCargadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentosCargadosPageRoutingModule {}
