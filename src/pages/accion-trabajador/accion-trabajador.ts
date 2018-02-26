import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerTrabajadoresPage } from '../ver-trabajadores/ver-trabajadores';

/**
 * Generated class for the AccionTrabajadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accion-trabajador',
  templateUrl: 'accion-trabajador.html',
})
export class AccionTrabajadorPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccionTrabajadorPage');
  }


  volver(): void {
    this.navCtrl.push(VerTrabajadoresPage);
  }
}

