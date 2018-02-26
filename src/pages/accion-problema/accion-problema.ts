import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerProblemasPage } from "../ver-problemas/ver-problemas";

/**
 * Generated class for the AccionProblemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accion-problema',
  templateUrl: 'accion-problema.html',
})
export class AccionProblemaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccionProblemaPage');
  }


  volver(): void {
    this.navCtrl.push(VerProblemasPage);
  }
}

