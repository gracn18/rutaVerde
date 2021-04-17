import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserModel} from '../../models/User.models';
import {AuthsrvService} from '../../services/authsrv.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private srvAut : AuthsrvService, private router:Router) { }

  ngOnInit(): void {
  }

  salir(form: NgForm){
    this.srvAut.salir();
    this.router.navigateByUrl('/ingresar')
  }

}
