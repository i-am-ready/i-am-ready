/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RequestBuilder} from '../request-builder';
import {StrictHttpResponse} from '../strict-http-response';
import {ApiConfiguration} from '../api-configuration.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Signature} from "../models/signature";

@Injectable({
  providedIn: 'root',
})
export class MobilizationService {

  constructor(private http: HttpClient, private config: ApiConfiguration) {}

  post(signature: Signature, additionalHeaders?: { [header: string]: any }): Observable<Signature> {
    const rb = new RequestBuilder(this.config.rootUrl, '/api/sign', 'post');
    Object.keys(additionalHeaders ?? {}).forEach(h => rb.header(h, additionalHeaders![h]));
    rb.body(signature, 'application/json');

    return this.http.request(rb.build({ responseType: 'json', accept: 'application/json' })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        const sr = r as StrictHttpResponse<Signature>;
        return sr.body;
      })
    );
  }

  getParseNumber(phoneNumber: string, additionalHeaders?: { [header: string]: any }): Observable<any> {
    const rb = new RequestBuilder(this.config.rootUrl, '/api/parse-number/{number}', 'get');
    Object.keys(additionalHeaders ?? {}).forEach(h => rb.header(h, additionalHeaders![h]));
    rb.path('number', phoneNumber);

    return this.http.request(rb.build({ responseType: 'json', accept: 'application/json' })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        const sr = r as StrictHttpResponse<any>;
        return sr.body;
      })
    );
  }

  getSignExists(phoneNumber: string, additionalHeaders?: { [header: string]: any }): Observable<boolean> {
    const rb = new RequestBuilder(this.config.rootUrl, '/api/sign-exists/{number}', 'get');
    Object.keys(additionalHeaders ?? {}).forEach(h => rb.header(h, additionalHeaders![h]));
    rb.path('number', phoneNumber);

    return this.http.request(rb.build({ responseType: 'json', accept: 'application/json' })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        const sr = r as StrictHttpResponse<any>;
        return sr.body;
      })
    );
  }

}
