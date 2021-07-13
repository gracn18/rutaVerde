import { Component, OnInit } from '@angular/core';
//import { especieService } from 'src/app/services/especie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertifyService } from 'src/app/services/alertify.service';

import { Especimen } from 'src/app/models/especimen';
import { EspecimenService } from 'src/app/services/especimen.service';

@Component({
  selector: 'app-especies-detail',
  templateUrl: './especies-detail.component.html',
  styleUrls: ['./especies-detail.component.css']
})
export class EspeciesDetailComponent implements OnInit {
  //especie detail parameters
  especie = new Especimen();
  pagina2s = [];
  id: number;
  especies = [];
  pagina2Statuses: Array<any> = [];
  //form parameters campo5 pagina2
  Pagina2Form: FormGroup;
  modalRef: BsModalRef;
  updated = true;
  //form parameters campo5 especie
  especieUpdateForm: FormGroup;
  showModal = true;

  constructor(private especieService: EspecimenService,
              private alert: AlertifyService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.staticLoadPage();
    this.LoadespecieUpdateForm(this.especie);
  }
  staticLoadPage(){
    
    this.Pagina2Form = this.formBuilder.group({
      'id': [null, [Validators.required]],
      'notas': [null, [Validators.required]],
      'ubicacion': [null, [Validators.required]],
      'nombre': [null, [Validators.required]],
      'pagina2Status': [null, [Validators.required]],
      'especieId': [this.id]
    });
    this.Pagina2Form.value['especieId'] = this.id;
    this.loadespecieDetail();
    
  }

  loadespecieDetail() {
    this.especie = this.especieService.getObjeto();
    if(!this.especie) this.router.navigate(['especies/']);
  }

  LoadespecieUpdateForm(res){
    this.updated=true;
    this.especieUpdateForm = this.formBuilder.group({
      'id': [res['id'], [Validators.required]],
      'nombre': [res['nombre'], [Validators.required]],
      'ubicacion': [res['ubicacion'], [Validators.required]],
      'notas': [res['notas'], [Validators.required]],
      
    });
  }
  updateespecie(){
    console.log('loading')
    if (!this.especieUpdateForm.valid) {
      return;
    }
    this.especieService.actualizarEspecimen(this.especieUpdateForm.value);
    this.alert.success('registro actualziado');
  }
  savePagina2() {
    this.Pagina2Form.value['especieId'] = this.id;
    if (!this.Pagina2Form.valid) {
      return;
    }
   /* this.pagina2Service.post(this.Pagina2Form.value).subscribe(
      res => {
        this.loadespecieDetail();
        if(res['id'] > 0 ){
          this.showModal = false;
          this.alert.success('El registro es exitoso.');
        }
        this.Pagina2Form.reset();
      },
      error=>{
        this.staticLoadPage();
        this.LoadespecieUpdateForm(this.especie);
        this.alert.error('Registro fallido.');
      }
    );*/
  }

  deletePagina2(id) {
   /* this.pagina2Service.delete(id).subscribe(
      res => {
        if (res === true) {
          this.loadespecieDetail();
          this.alert.success('Eliminación exitosa.');
        } else {
          this.loadespecieDetail();
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
    return this.especieUpdateForm.controls; 
  }
}
