import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/User.models';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
  
})
export class AuthsrvService {

  private llaveApi="AIzaSyBQaho3q-eCkYleesQ_TtbtTlmCWM5QZqw";
  private tokenUsuario: string="";


  constructor(private http:HttpClient) {             
    this.obtenerToken();
  }                                          

  //Se crea una función para registrar la información en la bd
 
  registrar(user:UserModel){
     const datosUsuario={
       email:user.correo,
       password:user.clave, //Función de propagación, de emascript
       returnSecureToken:true //se deja en true para que permita el manejo de token
     }
     //Para utilizar un template, se debe utilizar la tilde francesa `
     return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.llaveApi}`, datosUsuario).pipe(
       map(res => {
         console.log(res["idToken"]);
         console.log("RSJX"); //RSJX programación reactiva
         //this.guardarToken(res['idToken']);
         return res;
       })
     )
     
  }
  
  ingresar(user:UserModel){
    const datosUsuario={
      email:user.correo,
      password:user.clave, //Función de propagación, de emascript
      returnSecureToken:true //se deja en true para que permita el manejo de token
    }
    //Para utilizar un template, se debe utilizar la tilde francesa `
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.llaveApi}`, datosUsuario);
  }

  salir(){
    this.tokenUsuario="";
    localStorage.clear();
  }
  guardarToken(idToken:string){
    this.tokenUsuario=idToken;
    localStorage.setItem('token', this.tokenUsuario);

  }
  private obtenerToken(){
    this.tokenUsuario=localStorage.getItem("token") ? localStorage.getItem("token"):null;
  }

  public obtenerTokenExt(){
    return this.tokenUsuario=localStorage.getItem("token") ? localStorage.getItem("token"):null;
  }

  estaLoggeado():boolean{
    this.obtenerToken();
    //!! algo vacío lo convierte a false, algo no vacío lo convierte a true
    return !!this.tokenUsuario  &&  !this.tokenVencido();
  }
  
  private tokenVencido(): boolean{
    let fechaExpira= this.obtenerFechaExpiraToken();

    return fechaExpira<new Date();
  }

  private obtenerFechaExpiraToken() :any{
    /*let token:any=decode(localStorage.getItem('toke'));
    console.log('Token '+token.exp);

    if(!token){
      return null;  
    }

    let fechaExpira = new Date();
    fechaExpira.setUTCSeconds(token.exp);

    return fechaExpira;*/
  }
}
