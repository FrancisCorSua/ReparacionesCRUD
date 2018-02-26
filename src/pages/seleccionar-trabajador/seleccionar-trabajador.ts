import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirProblemaPage } from '../anadir-problema/anadir-problema';
import { AccionTrabajadorPage } from '../accion-trabajador/accion-trabajador';

/**
 * Generated class for the VerTrabajadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccionar-trabajador',
  templateUrl: 'seleccionar-trabajador.html',
})
export class SeleccionarTrabajadorPage {
  trabajadores: any;
  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public servicio: UserServiceProvider) {
    this.callback = this.navParams.get("callback");
  }

  seleccionarTrabajador(req){
    console.log("5");
    // this.navCtrl.push(AnadirProblemaPage,{
    //   trabajadorID: req.trabajadorID 
    // });
    this.callback(req.trabajadorID).then(()=>{
      this.navCtrl.pop();
   });
}


  ionViewDidLoad() {
        console.log('ionViewDidLoad SeleccionarTrabajadorPage');
        this.servicio.getTrabajadores().subscribe(
            (data) => {
                this.trabajadores = data;
            },
            (error) => {
                console.error(error);
            }
        )
    }


}
