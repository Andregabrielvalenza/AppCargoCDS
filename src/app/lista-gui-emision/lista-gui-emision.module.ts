import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaGuiEmisionPageRoutingModule } from './lista-gui-emision-routing.module';

import { ListaGuiEmisionPage } from './lista-gui-emision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaGuiEmisionPageRoutingModule
  ],
  declarations: [ListaGuiEmisionPage]
})
export class ListaGuiEmisionPageModule {}
