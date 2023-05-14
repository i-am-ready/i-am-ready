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
import {CountrySelectorModule} from "../../shared/components/country-selector/country-selector.module";
import { ThirdPartyReferencesComponent } from './components/third-party-references/third-party-references.component';


@NgModule({
  declarations: [
    SignComponent,
    SignFormComponent,
    ThirdPartyReferencesComponent
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
        TranslateModule,
        CountrySelectorModule
    ]
})
export class PublicModule { }
