import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserModel} from '../../models/User.models';
import {AuthsrvService} from '../../services/authsrv.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  
  usuario : UserModel = new UserModel();
  

  constructor(private srvAut : AuthsrvService, private router:Router) { }

  ngOnInit(): void {
    
  }
  crearUsuario(form: NgForm){
    if(form.invalid){
       return;
    }
    else{
      
      this.srvAut.registrar(this.usuario).subscribe(res =>{
        alert("Usuario registrado");
        //Se envia al home
        this.router.navigateByUrl('/principal')
      }, (error)=>{
        alert('Se presentó un inconveniente  '+error.error.error.message);
      });
    }
  }
}
