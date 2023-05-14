import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from "rxjs/operators";
import {compareVersions} from "@angular/compiler-cli/src/version_helpers";

export type CountryTranslation = { [lang: string]: string };

export interface Country {
  name: string;
  iso2: string;
  population: number;
  flag: string;
  phonePrefix: string;
  translations: CountryTranslation;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1';

  private cache?: Country[];

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    if (this.cache === undefined) {
      const url = `${this.apiUrl}/all`;
      return this.http.get<any>(url).pipe(
        map(raw => {
          this.cache = raw
            .map((c: any) => {
              return {
                name: c.name.common,
                iso2: c.cca2,
                phonePrefix: c.idd.root,
                flag: c.flag,
                population: c.population,
                translations: Object.keys(c.translations).reduce((p, l) => {
                  p[l.substring(0, 2)] = c.translations[l]?.common ?? c.name;
                  return p;
                }, {} as CountryTranslation)
              } as Country;
            });
          this.cache = this.cache!.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
          return this.cache!;
        })
      );
    }

    return of(this.cache);
  }

}
