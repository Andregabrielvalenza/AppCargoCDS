import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargadosPaquetesPageRoutingModule } from './cargados-paquetes-routing.module';

import { CargadosPaquetesPage } from './cargados-paquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargadosPaquetesPageRoutingModule
  ],
  declarations: [CargadosPaquetesPage]
})
export class CargadosPaquetesPageModule {}
