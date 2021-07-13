import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent} from './pages/ingresar/ingresar.component';
import { CrearUsuarioComponent} from './pages/crear-usuario/crear-usuario.component';
import { HomeComponent} from './pages/home/home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  {path:"", component:HomeComponent, canActivate: [AuthGuardGuard],
  children: [  {path: '', pathMatch: 'full', redirectTo: 'homeInt'},
  {path:"homeInt", loadChildren: () => import('./home-int/home-int.module').then(m => m.HomeIntModule)},
  {path:"especies", loadChildren: () => import('./especies/especies.module').then(m => m.EspeciesModule)},
  {path:"calidad", loadChildren: () => import('./calidad/calidad.module').then(m => m.CalidadModule)},
  {path:"sitios", loadChildren: () => import('./sitios/sitios.module').then(m => m.SitiosModule)},]},
  {path:"registrar",  component:CrearUsuarioComponent},
  {path:"ingresar", component:IngresarComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
