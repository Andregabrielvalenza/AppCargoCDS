import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaGuiEmisionPage } from './lista-gui-emision.page';

const routes: Routes = [
  {
    path: '',
    component: ListaGuiEmisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaGuiEmisionPageRoutingModule {}
