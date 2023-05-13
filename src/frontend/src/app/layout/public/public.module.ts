import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicComponent } from './public.component';
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    NavbarComponent,
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexModule
  ]
})
export class PublicModule { }
