import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarDocumentoPageRoutingModule } from './cargar-documento-routing.module';

import { CargarDocumentoPage } from './cargar-documento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarDocumentoPageRoutingModule
  ],
  declarations: [CargarDocumentoPage]
})
export class CargarDocumentoPageModule {}
