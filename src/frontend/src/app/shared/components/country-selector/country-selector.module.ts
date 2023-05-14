import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountrySelectorComponent} from "./country-selector.component";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    CountrySelectorComponent,
  ],
  exports: [
    CountrySelectorComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    TranslateModule
  ]
})
export class CountrySelectorModule {
}
