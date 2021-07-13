import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertifyService } from 'src/app/services/alertify.service';

import { EditorModule } from '@tinymce/tinymce-angular';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CalidadComponent } from './calidad.component';
import { CalidadRoutingModule } from './calidad.routing.module';


@NgModule({
  declarations: [CalidadComponent],
  imports: [
    CommonModule,
    CalidadRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [
    AlertifyService,
    /*ApiServiceSitio,*/
    BsModalRef,
    DatePipe
  ],
  bootstrap: [CalidadComponent]
})
export class CalidadModule { }
