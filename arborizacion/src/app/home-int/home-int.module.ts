import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-int.routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HomeIntComponent } from './home-int.component';
import { AlertifyService } from '../services/alertify.service';
@NgModule({
  declarations: [HomeIntComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    EditorModule,
    IvyCarouselModule
  ],
  providers: [
    AlertifyService,
    /*ApiService,*/
    BsModalRef
  ]
})
export class HomeIntModule { }
