import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerEvaluacionesPage } from '../ver-evaluaciones/ver-evaluaciones';

/**
 * Generated class for the AccionEvaluacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accion-evaluacion',
  templateUrl: 'accion-evaluacion.html',
})
export class AccionEvaluacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccionEvaluacionPage');
  }


  volver(): void {
    this.navCtrl.push(VerEvaluacionesPage);
  }
}
