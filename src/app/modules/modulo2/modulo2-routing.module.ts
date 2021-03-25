import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {path: '', component: DashComponent,
  children: [
    {path: 'roles', component: RolesComponent},
    {path: '**', redirectTo: 'roles'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }
