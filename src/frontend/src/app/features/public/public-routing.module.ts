import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignComponent} from "./components/sign/sign.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/sign'
  },
  {
    path: 'sign',
    component: SignComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
