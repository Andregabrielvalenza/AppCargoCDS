import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPaquetePage } from './edit-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: EditPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPaquetePageRoutingModule {}
