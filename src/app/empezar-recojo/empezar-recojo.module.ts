import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpezarRecojoPageRoutingModule } from './empezar-recojo-routing.module';

import { EmpezarRecojoPage } from './empezar-recojo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpezarRecojoPageRoutingModule
  ],
  declarations: [EmpezarRecojoPage]
})
export class EmpezarRecojoPageModule {}
