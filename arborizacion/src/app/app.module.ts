import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ArbolesComponent } from './pages/arboles/arboles.component';
import { ListaArbolesComponent } from './pages/arboles/lista-arboles/lista-arboles.component';
import { ArbolComponent } from './pages/arboles/arbol/arbol.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { ListaSitiosComponent } from './pages/sitios/lista-sitios/lista-sitios.component';
import { SitioComponent } from './pages/sitios/sitio/sitio.component';
import { EspecimenesComponent } from './pages/especimenes/especimenes.component';
import { ListEspecimenesComponent } from './pages/especimenes/list-especimenes/list-especimenes.component';
import { EspecimenComponent } from './pages/especimenes/especimen/especimen.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    IngresarComponent,
    HomeComponent,
    ArbolesComponent,
    ListaArbolesComponent,
    ArbolComponent,
    SitiosComponent,
    ListaSitiosComponent,
    SitioComponent,
    EspecimenesComponent,
    ListEspecimenesComponent,
    EspecimenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
