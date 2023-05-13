import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SignComponent } from './components/sign/sign.component';
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {FlexModule} from "@angular/flex-layout";
import {ReadyLevelSliderModule} from "../../shared/components/ready-level-slider/ready-level-slider.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { SignFormComponent } from './components/sign/sign-form/sign-form.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    SignComponent,
    SignFormComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatInputModule,
    MatSliderModule,
    FlexModule,
    ReadyLevelSliderModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    TranslateModule
  ]
})
export class PublicModule { }
