import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './Components/actualiza/actualiza.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { ListaComponent } from './Components/lista/lista.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'actualiza/:id',component:ActualizaComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
