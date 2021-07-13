import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertifyService } from 'src/app/services/alertify.service';

import { EditorModule } from '@tinymce/tinymce-angular';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EspeciesComponent } from './especies.component';
import { EspeciesDetailComponent } from './especies-detail/especies-detail.component';
import { EspeciesRoutingModule } from './especies.routing.module';


@NgModule({
  declarations: [EspeciesComponent,EspeciesDetailComponent],
  imports: [
    CommonModule,
    EspeciesRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [
    AlertifyService,
    /*ApiServiceSitio,*/
    BsModalRef
  ],
  bootstrap: [EspeciesComponent, EspeciesDetailComponent]
})
export class EspeciesModule { }
