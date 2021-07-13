import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { sitioDetailComponent } from './sitios-detail/sitios-detail.component';
import { SitiosComponent } from './sitios.component';

const routes: Routes = [
  {
    path: '', component: SitiosComponent
  },
  {
    path: 'sitios-detail/:id', component: sitioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitioRoutingModule {}