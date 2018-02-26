import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnadirClientePage } from './anadir-cliente';

@NgModule({
  declarations: [
    AnadirClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AnadirClientePage),
  ],
})
export class AnadirClientePageModule {}
