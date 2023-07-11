import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentosCargadosPageRoutingModule } from './documentos-cargados-routing.module';

import { DocumentosCargadosPage } from './documentos-cargados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentosCargadosPageRoutingModule
  ],
  declarations: [DocumentosCargadosPage]
})
export class DocumentosCargadosPageModule {}
