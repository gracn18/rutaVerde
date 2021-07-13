import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CalidadComponent } from './calidad.component';


const routes: Routes = [
  {
    path: '', component: CalidadComponent
  },
 /* {
    path: 'sitios-detail/:id', component: sitioDetailComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalidadRoutingModule {}