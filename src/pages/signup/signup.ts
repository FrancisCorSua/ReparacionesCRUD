import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
    signupForm: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    error: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private auth: AuthProvider, public alertCtrl: AlertController) {
        this.signupForm = this.fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
        });

        this.email = this.signupForm.controls['email'];
        this.password = this.signupForm.controls['password'];
    }

    submit(): void {
        if (this.signupForm.valid) {
            var credentials = ({ email: this.email.value, password: this.password.value });
            this.auth.registerUser(credentials).subscribe(registerData => {
                console.log(registerData);
                this.usuarioRegistrado();
                this.navCtrl.setRoot(LoginPage);
            }, registerError => {
                console.log(registerError);
                if (registerError.code === 'auth/weak-password') {
                    this.contrasenaDebil();
                } else if (registerError.code === 'auth/email-already-in-use') {
                    this.usuarioNoRegistrado();
                }
                this.error = registerError;
            });
        }
    }

    usuarioRegistrado() {
        let alert = this.alertCtrl.create({
            title: 'Registrado sin problemas',
            subTitle: 'Usuario registrado correctamente',
            buttons: ['OK']
        });
        alert.present();
    }

    contrasenaDebil() {
        let alert = this.alertCtrl.create({
            title: 'Use una contraseña mas segura',
            subTitle: 'La contraseña es demasiado débil. Inserte una contraseña de mínimo 6 caracteres.',
            buttons: ['OK']
        });
        alert.present();
    }

    usuarioNoRegistrado() {
        let alert = this.alertCtrl.create({
            title: 'El usuario no ha sido registrado',
            subTitle: 'Este usuario ya ha sido registrado previamente',
            buttons: ['OK']
        });
        alert.present();
    }
}