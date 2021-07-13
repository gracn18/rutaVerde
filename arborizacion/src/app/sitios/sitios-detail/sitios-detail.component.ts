import { Component, OnInit } from '@angular/core';
//import { sitioService } from 'src/app/services/sitio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sitio } from 'src/app/models/sitio';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SitioService } from 'src/app/services/sitio.service';
@Component({
  selector: 'app-sitios-detail',
  templateUrl: './sitios-detail.component.html',
  styleUrls: ['./sitios-detail.component.css']
})
export class sitioDetailComponent implements OnInit {
  //sitio detail parameters
  sitio = new Sitio();
  pagina2s = [];
  id: number;
  sitios = [];
  pagina2Statuses: Array<any> = [];
  //form parameters campo5 pagina2
  Pagina2Form: FormGroup;
  modalRef: BsModalRef;
  updated = true;
  //form parameters campo5 sitio
  sitioUpdateForm: FormGroup;
  showModal = true;

  constructor(private sitioService: SitioService,
              private alert: AlertifyService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.staticLoadPage();
    this.LoadsitioUpdateForm(this.sitio);
  }
  staticLoadPage(){
    
    this.Pagina2Form = this.formBuilder.group({
      'id': [null, [Validators.required]],
      'notas': [null, [Validators.required]],
      'ubicacion': [null, [Validators.required]],
      'nombre': [null, [Validators.required]],
      'pagina2Status': [null, [Validators.required]],
      'sitioId': [this.id]
    });
    this.Pagina2Form.value['sitioId'] = this.id;
    this.loadsitioDetail();
    
  }

  loadsitioDetail() {
    this.sitio = this.sitioService.getObjeto();
    if(!this.sitio) this.router.navigate(['sitios/']);
  }

  LoadsitioUpdateForm(res){
    this.updated=true;
    this.sitioUpdateForm = this.formBuilder.group({
      'id': [res['id'], [Validators.required]],
      'nombre': [res['nombre'], [Validators.required]],
      'ubicacion': [res['ubicacion'], [Validators.required]],
      'notas': [res['notas'], [Validators.required]],
      
    });
  }
  updatesitio(){
    console.log('loading')
    if (!this.sitioUpdateForm.valid) {
      return;
    }
    this.sitioService.actualizarSitio(this.sitioUpdateForm.value);
    this.alert.success('registro actualziado');
  }
  savePagina2() {
    this.Pagina2Form.value['sitioId'] = this.id;
    if (!this.Pagina2Form.valid) {
      return;
    }
   /* this.pagina2Service.post(this.Pagina2Form.value).subscribe(
      res => {
        this.loadsitioDetail();
        if(res['id'] > 0 ){
          this.showModal = false;
          this.alert.success('El registro es exitoso.');
        }
        this.Pagina2Form.reset();
      },
      error=>{
        this.staticLoadPage();
        this.LoadsitioUpdateForm(this.sitio);
        this.alert.error('Registro fallido.');
      }
    );*/
  }

  deletePagina2(id) {
   /* this.pagina2Service.delete(id).subscribe(
      res => {
        if (res === true) {
          this.loadsitioDetail();
          this.alert.success('Eliminación exitosa.');
        } else {
          this.loadsitioDetail();
          this.alert.error('Error al eliminar. <br/> Vuelve a intentarlo más tarde.');
        }
      },
      error=>{
        this.alert.error('Error al eliminar. <br/> Vuelve a intentarlo más tarde.');
      }
    );*/
  }
  getAllPagina2Status(){
    /*this.pagina2Service.getAllPagina2Status().subscribe( res => {
      this.pagina2Statuses = res;
    });*/
  }
  backClicked() {
    this.location.back();
  }
  LoadInsertPagina2Form() {
    this.showModal = true;
  }
  get f1() { return this.Pagina2Form.controls; }
  get f2() { 
    return this.sitioUpdateForm.controls; 
  }
}
