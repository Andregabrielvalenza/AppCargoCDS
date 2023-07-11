import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRecojosPageRoutingModule } from './lista-recojos-routing.module';

import { ListaRecojosPage } from './lista-recojos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRecojosPageRoutingModule
  ],
  declarations: [ListaRecojosPage]
})
export class ListaRecojosPageModule {}
