import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadyLevelSliderComponent } from './ready-level-slider.component';
import {MatSliderModule} from "@angular/material/slider";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
    declarations: [
        ReadyLevelSliderComponent
    ],
    exports: [
        ReadyLevelSliderComponent
    ],
  imports: [
    CommonModule,
    MatSliderModule,
    FlexModule
  ]
})
export class ReadyLevelSliderModule { }
