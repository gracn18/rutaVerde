import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserModel} from '../../models/User.models';
import {AuthsrvService} from '../../services/authsrv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {
  usuario : UserModel = new UserModel();
  tokenUsuario: string;

  constructor(private srvAut : AuthsrvService, private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(form: NgForm){
    
    if(form.invalid){
      return;
   }
   else{
     
     this.srvAut.ingresar(this.usuario).subscribe(res =>{
       alert("Usuario loggeado");
       //Se envia al home
       this.srvAut.guardarToken(res['idToken']);
       this.router.navigateByUrl('/');
     }, (error)=>{
       alert('Se presentó un inconveniente   '+error.error.error.message);
     });
   }
  }

  
}
