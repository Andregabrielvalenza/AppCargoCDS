import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPaquetePageRoutingModule } from './edit-paquete-routing.module';

import { EditPaquetePage } from './edit-paquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPaquetePageRoutingModule
  ],
  declarations: [EditPaquetePage]
})
export class EditPaquetePageModule {}
