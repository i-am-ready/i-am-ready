/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RequestBuilder} from '../request-builder';
import {StrictHttpResponse} from '../strict-http-response';
import {ApiConfiguration} from '../api-configuration.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IpGeolocationService {

  constructor(private http: HttpClient, private config: ApiConfiguration) {}

  getCountry(additionalHeaders?: { [header: string]: any }): Observable<string> {
    const rb = new RequestBuilder(this.config.rootUrl, '/api/ip-geolocation/country', 'get');
    Object.keys(additionalHeaders ?? {}).forEach(h => rb.header(h, additionalHeaders![h]));

    return this.http.request(rb.build({ responseType: 'json', accept: 'application/json' })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        const sr = r as StrictHttpResponse<any>;
        return sr.body;
      })
    );
  }

  getCountryByIp(ip:string, additionalHeaders?: { [header: string]: any }): Observable<string> {
    const rb = new RequestBuilder(this.config.rootUrl, '/api/ip-geolocation/country/{ip}', 'get');
    Object.keys(additionalHeaders ?? {}).forEach(h => rb.header(h, additionalHeaders![h]));
    rb.path('ip', ip);

    return this.http.request(rb.build({ responseType: 'json', accept: 'application/json' })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        const sr = r as StrictHttpResponse<any>;
        return sr.body;
      })
    );
  }

}
