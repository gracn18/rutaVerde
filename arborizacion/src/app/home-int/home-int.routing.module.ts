import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeIntComponent } from './home-int.component';

const routes: Routes = [
  {
    path: '', component: HomeIntComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}