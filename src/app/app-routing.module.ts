import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Modulo1Module } from './modules/modulo1/modulo1.module';

const routes: Routes = [
  {
    path: 'modulo1',
    loadChildren: () => import ('../app/modules/modulo1/modulo1.module').then(m => m.Modulo1Module)
  },
  {
    path: 'modulo2',
    loadChildren: () => import ('../app/modules/modulo2/modulo2.module').then(m => m.Modulo2Module)
  },
  {path: '**', redirectTo: 'modulo1'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
