import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Especimen } from '../models/especimen';

@Injectable({
  providedIn: 'root'
})
export class EspecimenService {


  private objeto: any;

  public setObjeto(objetoData: any) {
    this.objeto = objetoData;
  }

  public getObjeto(){
    return this.objeto;
  }

  listaEspecimenes : AngularFireList<any>;
  
  
  constructor(private firebase:AngularFireDatabase) { }

  getListaEspecimenes(){
    this.listaEspecimenes=this.firebase.list('especimenes');
    return this.listaEspecimenes;
  }

  saveEspecimen(especimen: Especimen){
    this.listaEspecimenes.push({
      id : especimen.id,
      /*id_especie : especimen.id_especie,
      id_sitio : especimen.id_sitio,*/
      especie : especimen.especie,
      sitio : especimen.sitio,
      sembrado_avistado : especimen.sembrado_avistado,
      valor: especimen.valor,
      imagen : especimen.imagen
    });
  }

  actualizarEspecimen(especimen: Especimen){
    this.listaEspecimenes.update(especimen.id,{
     /* id_especie : especimen.id_especie,
      id_sitio : especimen.id_sitio,*/
      especie : especimen.especie,
      sitio : especimen.sitio,
      sembrado_avistado : especimen.sembrado_avistado,
      valor: especimen.valor,
      imagen : especimen.imagen
    });
  }

  borrarEspecimen(id: string){
    this.listaEspecimenes.remove(id);
  }
}
