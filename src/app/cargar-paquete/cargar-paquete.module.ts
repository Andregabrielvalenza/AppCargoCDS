import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarPaquetePageRoutingModule } from './cargar-paquete-routing.module';

import { CargarPaquetePage } from './cargar-paquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarPaquetePageRoutingModule
  ],
  declarations: [CargarPaquetePage]
})
export class CargarPaquetePageModule {}
