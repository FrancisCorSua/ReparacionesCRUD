import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnadirTrabajadorPage } from './anadir-trabajador';

@NgModule({
  declarations: [
    AnadirTrabajadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AnadirTrabajadorPage),
  ],
})
export class AnadirTrabajadorPageModule {}
