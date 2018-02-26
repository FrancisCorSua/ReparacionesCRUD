import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { VerTrabajadoresPage } from "../ver-trabajadores/ver-trabajadores";

/**
 * Generated class for the AnadirTrabajadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-trabajador',
  templateUrl: 'anadir-trabajador.html',
})
export class AnadirTrabajadorPage {
    formTrabajador: FormGroup;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fb: FormBuilder,
        public auth: AuthProvider, public servicio: UserServiceProvider) {

        this.formTrabajador = this.fb.group({
            trabajadorUsuario: ['', [Validators.required]],
            trabajadorContrasena: ['', [Validators.required]],    
            trabajadorNombre: ['', [Validators.required]],    
            trabajadorCategoria: ['', [Validators.required]],
        });
    }

    guardarTrabajador() {
      var trabajador = {
        trabajadorUsuario: this.formTrabajador.get('trabajadorUsuario').value,
        trabajadorContrasena: this.formTrabajador.get('trabajadorContrasena').value,
        trabajadorNombre: this.formTrabajador.get('trabajadorNombre').value,
        trabajadorCategoria: this.formTrabajador.get('trabajadorCategoria').value,
      }

    
      this.servicio.postTrabajadores(trabajador).subscribe(
          (data) => {
              console.log(data);
              this.alertaAnadida();
              this.navCtrl.push(VerTrabajadoresPage);
          },
          (error) => {
              console.log(error);
              this.falloInesperado();
          });
    }

  alertaAnadida() {
      let alert = this.alertCtrl.create({
          title: 'Sin problema',
          subTitle: 'El trabajador fue añadido correctamente',
          buttons: ['OK']
      });
      alert.present();
  }

  falloInesperado() {
      let alert = this.alertCtrl.create({
          title: 'Ha habido un error',
          subTitle: 'Ha ocurrido un error intentando añadir el trabajador. Inténtelo de nuevo más tarde.',
          buttons: ['OK']
      });
      alert.present();
  }

  volver(): void {
      this.navCtrl.push(VerTrabajadoresPage);
  }

}