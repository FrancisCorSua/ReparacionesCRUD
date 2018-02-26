import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccionClientePage } from './accion-cliente';

@NgModule({
  declarations: [
    AccionClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AccionClientePage),
  ],
})
export class AccionClientePageModule {}
