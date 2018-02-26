import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirEvaluacionPage } from '../anadir-evaluacion/anadir-evaluacion';
import { AccionEvaluacionPage } from '../accion-evaluacion/accion-evaluacion';

/**
 * Generated class for the VerEvaluacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-evaluaciones',
  templateUrl: 'ver-evaluaciones.html',
})
export class VerEvaluacionesPage {
  evaluaciones: any;
  numero: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public servicio: UserServiceProvider) {
    }

  anadirEvaluacion(): void {
    this.navCtrl.push(AnadirEvaluacionPage);
  }

  deleteEvaluacionServicios(): void {
    this.servicio.deleteEvaluacionServicios(this.numero);
    this.navCtrl.setRoot(AccionEvaluacionPage);
  }

  editarEvaluacion(req) {
    let prompt = this.alertCtrl.create({
      title: 'Edita Trabajador',
      inputs: [
        {
          name: 'calificacion',
          placeholder: 'Calificación del trabajador',
          value: req.calificacion
        },
        {
          name: 'nota',
          placeholder: 'Nota del usuario',
          value: req.nota
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
              evaluacionID: req.evaluacionID,
              calificacion: data.calificacion,
              nota: data.nota
            }
            this.servicio.updateEvaluaciones(params)
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

  ionViewDidLoad() {
        console.log('ionViewDidLoad HomedPage');
        this.servicio.getEvaluacionServicios().subscribe(
            (data) => {
                this.evaluaciones = data;
            },
            (error) => {
                console.error(error);
            }
        )
    }


}
