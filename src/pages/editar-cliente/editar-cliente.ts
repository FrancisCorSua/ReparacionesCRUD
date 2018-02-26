import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { HomePage } from "../home/home";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AccionClientePage } from '../accion-cliente/accion-cliente';

/**
 * Generated class for the EditarClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-cliente',
  templateUrl: 'editar-cliente.html',
})
export class EditarClientePage {
    formCliente: FormGroup;

    ID: string;
    Usuario: string;
    Contrasena: String;
    Nombre: string;
    CodigoPostal: string;
    Telefono: string;


    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public fb: FormBuilder,
        public auth: AuthProvider, public servicio: UserServiceProvider) {

        this.ID = navParams.get('clienteID'); 
        this.Usuario = navParams.get('clienteUsuario');
        this.Contrasena = navParams.get('clienteContrasena'); 
        this.Nombre = navParams.get('clienteNombre');
        this.CodigoPostal = navParams.get('codigoPostal'); 
        this.Telefono = navParams.get('clienteTelefono');

        this.formCliente = this.fb.group({
            clienteUsuario: ['', [Validators.required]],
            clienteContrasena: ['', [Validators.required]],    
            clienteNombre: ['', [Validators.required]],    
            codigoPostal: ['', [Validators.required]],    
            clienteTelefono: ['', [Validators.required]],  
        });
    }

    guardarCliente() {
      var cliente = {
        clienteUsuario: this.formCliente.get('clienteUsuario').value,
        clienteContrasena: this.formCliente.get('clienteContrasena').value,
        clienteNombre: this.formCliente.get('clienteNombre').value,
        codigoPostal: this.formCliente.get('codigoPostal').value,
        clienteTelefono: this.formCliente.get('clienteTelefono').value,
      }

    
      this.servicio.updateClientes(cliente).subscribe(
          (data) => {
              console.log(data);
              this.alertaAnadida();
              this.navCtrl.push(AccionClientePage);
          },
          (error) => {
              console.log(error);
              this.falloInesperado();
          });
    }

  alertaAnadida() {
      let alert = this.alertCtrl.create({
          title: 'Sin problema',
          subTitle: 'El cliente fue editado correctamente',
          buttons: ['OK']
      });
      alert.present();
  }

  falloInesperado() {
      let alert = this.alertCtrl.create({
          title: 'Ha habido un error',
          subTitle: 'Ha ocurrido un error intentando editar al cliente. Inténtelo de nuevo más tarde.',
          buttons: ['OK']
      });
      alert.present();
  }

  volver(): void {
      this.navCtrl.push(HomePage);
  }

}