import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiEmisionTransportistaPageRoutingModule } from './gui-emision-transportista-routing.module';

import { GuiEmisionTransportistaPage } from './gui-emision-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiEmisionTransportistaPageRoutingModule
  ],
  declarations: [GuiEmisionTransportistaPage]
})
export class GuiEmisionTransportistaPageModule {}
