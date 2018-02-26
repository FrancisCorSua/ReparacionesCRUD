import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserService    get(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }    get(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }

Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getClientes(){
    return this.http.get("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.cliente");
  }

  getUnCliente(clienteId){
    return this.http.get("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.cliente" + clienteId) ;
  }

  postClientes(cliente){
    console.log("insertar registro");
    console.log(cliente);

    return this.http.post("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.cliente",
      cliente,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  updateClientes(data) {
    
    console.log("editar registro nº");
    console.log(data);
    return this.http.put(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.cliente/" + data.clienteID, data,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  deleteClientes(clienteId) {
    console.log("borrar registro nº" + clienteId);
    return this.http.delete(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.cliente/" + clienteId
    ).subscribe(
        resp => console.log('borrado'),
        error => console.log('no se pudo borrar')
        );
  }

  getTrabajadores(){
    return this.http.get("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.trabajador");
  }

  getUnTrabajador(trabajadorId){
    return this.http.get("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.trabajador" + trabajadorId) ;
  }

  postTrabajadores(trabajador){
    console.log("insertar registro");
    console.log(trabajador);

    return this.http.post("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.trabajador",
    trabajador,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  updateTrabajadores(data) {
    
    console.log("editar registro nº");
    console.log(data);
    return this.http.put(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.trabajador/" + data.trabajadorID, data,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }


  deleteTrabajadores(trabajadorId) {
    console.log("borrar registro nº" + trabajadorId);
    return this.http.delete(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.trabajador/" + trabajadorId
    ).subscribe(
        resp => console.log('borrado'),
        error => console.log('no se pudo borrar')
        );
  }

  getProblemas(){
    return this.http.get("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.problema");
  }

  postProblemas(problema){
    console.log("insertar registro");
    console.log(problema);

    return this.http.post("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.problema",
    problema,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  updateProblemas(data) {
    
    console.log("editar registro nº");
    console.log(data);
    return this.http.put(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.problema/" + data.problemaID, data,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }


  deleteProblemas(problemaId) {
    console.log("borrar registro nº" + problemaId);
    return this.http.delete(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.problema/" + problemaId
    ).subscribe(
        resp => console.log('borrado'),
        error => console.log('no se pudo borrar')
        );
  }

  getEvaluacionServicios(){
    return this.http.get("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.evaluacionservicio");
  }

  postEvaluacionServicios(evaluacion){
    console.log("insertar registro");
    console.log(evaluacion);

    return this.http.post("http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.evaluacionservicio",
    evaluacion,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  updateEvaluaciones(data) {
    
    console.log("editar registro nº");
    console.log(data);
    return this.http.put(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.evaluacionservicio/" + data.evaluacionID, data,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  deleteEvaluacionServicios(evaluacionId) {
    console.log("borrar registro nº" + evaluacionId);
    return this.http.delete(
      "http://localhost:8080/Reparaciones-1.0-SNAPSHOT/webresources/org.miproyecto.reparaciones.evaluacionservicio/" + evaluacionId
    ).subscribe(
        resp => console.log('borrado'),
        error => console.log('no se pudo borrar')
        );
  }

}
