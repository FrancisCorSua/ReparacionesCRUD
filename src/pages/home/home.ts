import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirClientePage } from '../anadir-cliente/anadir-cliente';
import { AccionClientePage } from '../accion-cliente/accion-cliente';
import { EditarClientePage } from '../editar-cliente/editar-cliente';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  clientes: any;
  numero: any;
  // private cliente;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servicio: UserServiceProvider, public alertCtrl: AlertController) {
    this.ionViewDidLoad();
  }

  anadirCliente(): void {
    this.navCtrl.push(AnadirClientePage);
  }

  deleteClientes(): void {
    this.servicio.deleteClientes(this.numero);
    this.navCtrl.setRoot(AccionClientePage);
  }

  editarCliente(req) {
    let prompt = this.alertCtrl.create({
      title: 'Edita Cliente',
      inputs: [
        {
          name: 'clienteUsuario',
          placeholder: 'Usuario del cliente',
          value: req.clienteUsuario
        },
        {
          name: 'clienteContrasena',
          placeholder: 'Contraseña del cliente',
          value: req.clienteContrasena
        },
        {
          name: 'clienteNombre',
          placeholder: 'Nombre del cliente',
          value: req.clienteNombre
        },
        {
          name: 'codigoPostal',
          placeholder: 'Código postal',
          value: req.codigoPostal
        },
        {
          name: 'clienteTelefono',
          placeholder: 'Teléfono',
          value: req.clienteTelefono
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
              clienteID: req.clienteID,
              clienteUsuario: data.clienteUsuario,
              clienteContrasena: data.clienteContrasena,
              clienteNombre: data.clienteNombre,
              codigoPostal: data.codigoPostal,
              clienteTelefono: data.clienteTelefono
            }
            this.servicio.updateClientes(params)
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
    console.log('ionViewDidLoad HomePage');
    this.servicio.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }


}
