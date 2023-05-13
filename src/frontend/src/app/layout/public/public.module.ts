import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicComponent } from './public.component';
import {FlexModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    NavbarComponent,
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PublicModule { }
