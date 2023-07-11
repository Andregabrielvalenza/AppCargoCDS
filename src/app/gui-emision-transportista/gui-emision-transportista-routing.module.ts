import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiEmisionTransportistaPage } from './gui-emision-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: GuiEmisionTransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiEmisionTransportistaPageRoutingModule {}
