import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionarTrabajadorPage } from './seleccionar-trabajador';

@NgModule({
  declarations: [
    SeleccionarTrabajadorPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionarTrabajadorPage),
  ],
})
export class SeleccionarTrabajadorPageModule {}
