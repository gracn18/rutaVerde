import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Page } from '../models/Page';
import { SitioService } from '../services/sitio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.scss']
})
export class SitiosComponent implements OnInit {
  Sitios = [];
  rows = [];
  cols = [];
  page = new Page();
  control = true;
  controlSitioForm = true;
  _reload: boolean = true;

  SitioForm: FormGroup;

  searchForm: FormGroup;
  message: string | undefined;
  constructor(private sitioService: SitioService,
    private alert: AlertifyService,
    private formBuilder: FormBuilder,
    private router: Router) { }


    compare(a, b) {
      if (Number(a.id) > Number(b.id)) return -1;
      if (Number(b.id) > Number(a.id)) return 1;
    
      return 0;
    }

  ngOnInit() {
    this.control = true;
    this.page.size = 10;
    this.page.page = 0;
    this.sitioService.getListaSitios().valueChanges().subscribe(
      res => {
        const orden = res.sort(this.compare);
        this.rows = orden;
        this.Sitios = orden;
        this.page.totalElements = this.Sitios.length;
        this.reload();
      },
      error => {
        this.alert.error('Se presentaron problemas cargando la información');
      }
    );
    //this.rows = objs;
    /*this.page.size = pagedData.size;
    this.page.page = pagedData.page;
    this.page.totalElements = pagedData.totalElements;
    this.rows = pagedData.content;*/
    this.loadStaticPage();
  }

  private reload() {
    setTimeout(() => this._reload = false);
    setTimeout(() => this._reload = true);
  }

  loadStaticPage() {
    this.setPage({ offset: 0 });
    this.searchForm = this.formBuilder.group({
      'id': [null, [Validators.minLength(3)]]
    });
    this.SitioForm = this.formBuilder.group({
      //'id': [null, [Validators.required]],
      'nombre': [null, [Validators.required]],
      //'campo5': [null, [Validators.required]],
      'ubicacion': [null, [Validators.required]],
      'notas': [null, [Validators.required]]
    });
  }

  loadSitios() {
    /*this.SitioService.getAll().subscribe(res => {
      this.Sitios = res;
    });*/
  }

  loadSitioFormPanel() {
    this.controlSitioForm = true;
    this.SitioForm = this.formBuilder.group({
     // 'id': [null, [Validators.required]],
      'nombre': [null, [Validators.required]],
      //'campo5': [null, [Validators.required]],
      'ubicacion': [null, [Validators.required]],
      'notas': [null, [Validators.required]],
    });
  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
  }

  irDetalle(obj){
    this.sitioService.setObjeto(obj);
    //this.router.navigate(['/sitios-detail/',obj.id]);
  }

  saveSitio() {
    if (!this.SitioForm.valid) {
      return;
    }
    this.SitioForm.value.id = this.Sitios.length+1;
    this.sitioService.saveSitio(this.SitioForm.value);
    this.message = 'El registro es exitoso.';
    this.alert.success( 'El registro es exitoso.');
  }

  deleteSitio(id) {
    this.sitioService.borrarSitio(String(id));
    this.message = 'El registro ha sido eliminado..';
    this.alert.success( 'El registro ha sido eliminado..');
  }

  searchSitio() {
    if (!this.searchForm.valid) {
      return;
    }
    /* this.SitioService.findAllByid(this.searchForm.value['id']).subscribe(res => {
       this.Sitios = res;
       this.control = false;
       this.message = 'Se han encontrado registros.';
       this.alert.success('Se han encontrado registros.');
     }, 
     error =>{
       this.message = 'No se encontraron registros' ;
       this.alert.error('No se encontraron registros ');      
       this.control = true;
       this.loadStaticPage();
     });*/
  }

  get sf() { return this.searchForm.controls; }
  get f() { return this.SitioForm.controls; }
}
