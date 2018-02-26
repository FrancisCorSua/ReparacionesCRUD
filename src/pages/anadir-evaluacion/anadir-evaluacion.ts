import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { VerEvaluacionesPage } from "../ver-evaluaciones/ver-evaluaciones";
import { AccionEvaluacionPage } from '../accion-evaluacion/accion-evaluacion';

/**
 * Generated class for the AnadirEvaluacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-evaluacion',
  templateUrl: 'anadir-evaluacion.html',
})
export class AnadirEvaluacionPage {
  formEvaluacion: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fb: FormBuilder,
      public auth: AuthProvider, public servicio: UserServiceProvider) {

      this.formEvaluacion = this.fb.group({
        calificacion: ['', [Validators.required]],    
        nota: ['', [Validators.required]],
      });
  }

  guardarEvaluacion() {
    var evaluacion = {
        calificacion: this.formEvaluacion.get('calificacion').value,
        nota: this.formEvaluacion.get('nota').value,
    }

  
    this.servicio.postEvaluacionServicios(evaluacion).subscribe(
        (data) => {
            console.log(data);
            this.alertaAnadida();
            this.navCtrl.push(AccionEvaluacionPage);
        },
        (error) => {
            console.log(error);
            this.falloInesperado();
        });
  }

alertaAnadida() {
    let alert = this.alertCtrl.create({
        title: 'Sin problema',
        subTitle: 'La evaluación fue añadida correctamente',
        buttons: ['OK']
    });
    alert.present();
}

falloInesperado() {
    let alert = this.alertCtrl.create({
        title: 'Ha habido un error',
        subTitle: 'Ha ocurrido un error intentando añadir la evaluación. Inténtelo de nuevo más tarde.',
        buttons: ['OK']
    });
    alert.present();
}

volver(): void {
    this.navCtrl.push(VerEvaluacionesPage);
}

}