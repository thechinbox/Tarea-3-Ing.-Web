import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"formulario",component:FormularioComponent},
  {path:"noticias/:id",component:NoticiasComponent}
]
@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
