import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirProblemaPage } from '../anadir-problema/anadir-problema';
import { AccionProblemaPage } from '../accion-problema/accion-problema';

/**
 * Generated class for the VerProblemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-problemas',
  templateUrl: 'ver-problemas.html',
})
export class VerProblemasPage {
  problemas: any;
  numero: any;

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
  }

  anadirProblema(): void {
    this.navCtrl.push(AnadirProblemaPage);
  }

  deleteProblemas(): void {
    this.servicio.deleteProblemas(this.numero);
    this.navCtrl.setRoot(AccionProblemaPage);
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad HomedPage');
        this.servicio.getProblemas().subscribe(
            (data) => {
                this.problemas = data;
            },
            (error) => {
                console.error(error);
            }
        )
    }


}
