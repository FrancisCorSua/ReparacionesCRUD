import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirTrabajadorPage } from '../anadir-trabajador/anadir-trabajador';
import { AccionTrabajadorPage } from '../accion-trabajador/accion-trabajador';

/**
 * Generated class for the VerTrabajadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-trabajadores',
  templateUrl: 'ver-trabajadores.html',
})
export class VerTrabajadoresPage {
  trabajadores: any;
  numero: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public servicio: UserServiceProvider) {
  }

  anadirTrabajador(): void {
    this.navCtrl.push(AnadirTrabajadorPage);
  }

  deleteTrabajadores(): void {
    this.servicio.deleteTrabajadores(this.numero);
    this.navCtrl.setRoot(AccionTrabajadorPage);
  }

  editarTrabajador(req) {
    let prompt = this.alertCtrl.create({
      title: 'Edita Trabajador',
      inputs: [
        {
          name: 'trabajadorUsuario',
          placeholder: 'Usuario del trabajador',
          value: req.trabajadorUsuario
        },
        {
          name: 'trabajadorContrasena',
          placeholder: 'Contraseña del trabajador',
          value: req.trabajadorContrasena
        },
        {
          name: 'trabajadorNombre',
          placeholder: 'Nombre del trabajador',
          value: req.trabajadorNombre
        },
        {
          name: 'trabajadorCategoria',
          placeholder: 'Categoría del trabajador',
          value: req.trabajadorCategoria
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => { }
        }, {
          text: 'Guardar',
          handler: data => {
            let params: any = {
              trabajadorID: req.trabajadorID,
              trabajadorUsuario: data.trabajadorUsuario,
              trabajadorContrasena: data.trabajadorContrasena,
              trabajadorNombre: data.trabajadorNombre,
              trabajadorCategoria: data.trabajadorCategoria
            }
            this.servicio.updateTrabajadores(params)
              .subscribe(
              data => {
                console.log(data);
                this.ionViewDidLoad();
                this.showAlert(data);
              },
              err => console.log(err)
              );
          }
        }
      ]
    })
    prompt.present();
  }

  showAlert(men) {
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: men,
      buttons: ['ok']
    });
    alert.present();
  }

  getUnTrabajador(): void {
    this.servicio.getUnTrabajador(this.numero);
    this.navCtrl.setRoot(AccionTrabajadorPage);
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad VerTrabajadoresPage');
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
