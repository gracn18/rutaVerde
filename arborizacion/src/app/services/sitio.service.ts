import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Sitio } from '../models/sitio';

@Injectable({
  providedIn: 'root'
})
export class SitioService {

  listaSitios : AngularFireList<any>;

  private objeto: any;

  public setObjeto(objetoData: any) {
    this.objeto = objetoData;
  }

  public getObjeto(){
    return this.objeto;
  }
  
  
  constructor(private firebase:AngularFireDatabase) { }

  getListaSitios(){
    this.listaSitios=this.firebase.list('sitios');
    return this.listaSitios;
  }

  saveSitio(sitio: Sitio){
    this.listaSitios.push({
      id : sitio.id,
      nombre : sitio.nombre,
      ubicacion : sitio.ubicacion,
      notas : sitio.notas
    });
  }

  actualizarSitio(sitio: Sitio){
    this.listaSitios.update(String(sitio.id),{
      nombre : sitio.nombre,
      ubicacion : sitio.ubicacion,
      notas : sitio.notas
    });
  }

  borrarSitio(id: string){
    this.listaSitios.remove(id);
  }
}
