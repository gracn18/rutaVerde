import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EspeciesDetailComponent } from './especies-detail/especies-detail.component';
import { EspeciesComponent } from './especies.component';



const routes: Routes = [
  {
    path: '', component: EspeciesComponent
  },
  {
    path: 'especies-detail/:id', component: EspeciesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspeciesRoutingModule {}