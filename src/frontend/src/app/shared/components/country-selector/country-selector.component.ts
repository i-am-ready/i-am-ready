import {Component, forwardRef, OnInit} from '@angular/core';
import {Country, CountryService} from "../../../services/country.service";
import {TranslateService} from "@ngx-translate/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {IpGeolocationService} from "../../../api/services/ip-geolocation";

@Component({
  selector: 'iar-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrySelectorComponent),
      multi: true
    },
  ]
})
export class CountrySelectorComponent implements OnInit, ControlValueAccessor {

  countries: Country[] = [];

  selectedCountryCode?: string;

  constructor(private countryService: CountryService,
              private translateService: TranslateService,
              private ipGeolocationService: IpGeolocationService) {
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(c => this.countries = c);
    this.ipGeolocationService.getCountryByIp('83.68.216.2').subscribe(code => this.selectedCountryCode = code);
  }

  onChange: any = () => '';
  onTouch: any = () => '';

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(code: string): void {
    this.selectedCountryCode = code;
  }

  getCountryName(country: Country) {
    return country.translations[this.translateService.currentLang];
  }

  optionSelected(option: MatAutocompleteSelectedEvent) {
    this.onChange(option.option.value);
  }
}
