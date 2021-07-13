import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertifyService } from 'src/app/services/alertify.service';

import { EditorModule } from '@tinymce/tinymce-angular';
import { SitiosComponent } from './sitios.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SitioRoutingModule } from './sitios.routing.module';
import { sitioDetailComponent } from './sitios-detail/sitios-detail.component';
import { SitioService } from '../services/sitio.service';
@NgModule({
  declarations: [SitiosComponent,sitioDetailComponent],
  imports: [
    CommonModule,
    SitioRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [
    AlertifyService,
    SitioService,
    BsModalRef
  ],
  bootstrap: [SitiosComponent, sitioDetailComponent]
})
export class SitiosModule { }
