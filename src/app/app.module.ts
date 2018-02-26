import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http'
import { AuthProvider } from '../providers/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MenuPage } from '../pages/menu/menu';
import { AnadirTrabajadorPage } from '../pages/anadir-trabajador/anadir-trabajador';
import { AnadirEvaluacionPage } from '../pages/anadir-evaluacion/anadir-evaluacion';
import { AnadirProblemaPage } from '../pages/anadir-problema/anadir-problema';
import { AnadirClientePage } from '../pages/anadir-cliente/anadir-cliente';
import { EditarClientePage } from '../pages/editar-cliente/editar-cliente';
import { VerTrabajadoresPage } from '../pages/ver-trabajadores/ver-trabajadores';
import { AccionClientePage } from '../pages/accion-cliente/accion-cliente';
import { AccionTrabajadorPage } from '../pages/accion-trabajador/accion-trabajador';
import { AccionProblemaPage } from '../pages/accion-problema/accion-problema';
import { AccionEvaluacionPage } from '../pages/accion-evaluacion/accion-evaluacion';
import { VerProblemasPage } from '../pages/ver-problemas/ver-problemas';
import { VerEvaluacionesPage } from '../pages/ver-evaluaciones/ver-evaluaciones';
import { SeleccionarTrabajadorPage } from '../pages/seleccionar-trabajador/seleccionar-trabajador';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

export const firebaseConfig = {
  apiKey: "AIzaSyAHqjzT9aIHup_M5eoACz8vohLhLMYuI2I",
  authDomain: "proyectoreparaciones-85e3f.firebaseapp.com",
  databaseURL: "https://proyectoreparaciones-85e3f.firebaseio.com",
  projectId: "proyectoreparaciones-85e3f",
  storageBucket: "proyectoreparaciones-85e3f.appspot.com",
  messagingSenderId: "552916533549"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    MenuPage,
    AccionClientePage,
    AccionTrabajadorPage,
    AccionProblemaPage,
    AccionEvaluacionPage,
    AnadirClientePage,
    AnadirTrabajadorPage,
    AnadirEvaluacionPage,
    AnadirProblemaPage,
    EditarClientePage,
    VerTrabajadoresPage,
    VerProblemasPage,
    VerEvaluacionesPage,
    SeleccionarTrabajadorPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    MenuPage,
    AccionClientePage,
    AccionTrabajadorPage,
    AccionProblemaPage,
    AccionEvaluacionPage,
    AnadirClientePage,
    AnadirTrabajadorPage,
    AnadirEvaluacionPage,
    AnadirProblemaPage,
    EditarClientePage,
    VerTrabajadoresPage,
    VerProblemasPage,
    VerEvaluacionesPage,
    SeleccionarTrabajadorPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
