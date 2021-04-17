import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Arbol } from '../models/arbol';

@Injectable({
  providedIn: 'root'
})
export class ArbolService {
  listaArboles : AngularFireList<any>;
  arbolSeleccionado : Arbol = new Arbol();
  
  constructor(private firebase:AngularFireDatabase) { }

  getListaArboles(){
    this.listaArboles=this.firebase.list('arboles');
    return this.listaArboles;
  }

  saveArbol(arbol: Arbol){
    this.listaArboles.push({
      id : arbol.id,
      nombre_cientifico : arbol.nombre_cientifico,
      nombre_comun : arbol.nombre_comun,
      notas : arbol.notas
    });
  }

  actualizarArbol(arbol: Arbol){
    this.listaArboles.update(arbol.id,{
      nombre_cientifico : arbol.nombre_cientifico,
      nombre_comun : arbol.nombre_comun,
      notas : arbol.notas
    });
  }

  borrarArbol(id: string){
    this.listaArboles.remove(id);
  }
}
