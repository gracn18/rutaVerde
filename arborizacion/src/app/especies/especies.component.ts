import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Page } from '../models/Page';
import { EspecimenService } from '../services/especimen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {

  especies = [];
  rows = [];
  cols = [];
  page = new Page();
  control = true;
  controlespecieForm = true;
  _reload: boolean = true;

  especieForm: FormGroup;

  searchForm: FormGroup;
  message: string | undefined;
  constructor(private especieService: EspecimenService,
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
    this.especieService.getListaEspecimenes().valueChanges().subscribe(
      res => {
        const orden = res.sort(this.compare);
        this.rows = orden;
        this.especies = orden;
        this.page.totalElements = this.especies.length;
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
    this.especieForm = this.formBuilder.group({
      //'id': [null, [Validators.required]],
      'nombre': [null, [Validators.required]],
      //'campo5': [null, [Validators.required]],
      'ubicacion': [null, [Validators.required]],
      'notas': [null, [Validators.required]]
    });
  }

  loadespecies() {
    /*this.especieService.getAll().subscribe(res => {
      this.especies = res;
    });*/
  }

  loadespecieFormPanel() {
    this.controlespecieForm = true;
    this.especieForm = this.formBuilder.group({
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
    this.especieService.setObjeto(obj);
    //this.router.navigate(['/especies-detail/',obj.id]);
  }

  saveespecie() {
    if (!this.especieForm.valid) {
      return;
    }
    this.especieForm.value.id = this.especies.length+1;
    this.especieService.saveEspecimen(this.especieForm.value);
    this.message = 'El registro es exitoso.';
    this.alert.success( 'El registro es exitoso.');
  }

  deleteespecie(id) {
    this.especieService.borrarEspecimen(String(id));
    this.message = 'El registro ha sido eliminado..';
    this.alert.success( 'El registro ha sido eliminado..');
  }

  searchespecie() {
    if (!this.searchForm.valid) {
      return;
    }
    /* this.especieService.findAllByid(this.searchForm.value['id']).subscribe(res => {
       this.especies = res;
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
  get f() { return this.especieForm.controls; }
}
