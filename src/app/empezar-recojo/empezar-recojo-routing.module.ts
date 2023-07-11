import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpezarRecojoPage } from './empezar-recojo.page';

const routes: Routes = [
  {
    path: '',
    component: EmpezarRecojoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpezarRecojoPageRoutingModule {}
