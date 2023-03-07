import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class postService {

    constructor(private http: HttpClient) {

    }

    postData(url: string, payload: object, headerKeysString : string, headerValuesString: string) : Observable<any> {
        let headers = new HttpHeaders();
  
        headers = this.getHeaders(headerKeysString, headerValuesString);
  
        return  this.http.post<object>(url, payload, {headers});
      }
  
      getData(url: string, headerKeysString : string, headerValuesString: string) : Observable<any> {
        let headers = new HttpHeaders();
  
        headers = this.getHeaders(headerKeysString, headerValuesString);
  
        return this.http.get<string>(url, {headers});
    }
  
    getHeaders(headerKeysString: string, headerValuesString: string) : HttpHeaders {
      let headers = new HttpHeaders();
      if (headerKeysString != null && headerValuesString != null) {

        let headerKeys = headerKeysString.split(',');
        let headerValues = headerValuesString.split(',');
        if (headerValues.length >= headerKeys.length) {
            let n: number = headerKeys.length;
            let i: number = 0;
            for (i=0; i<n; i++)
                headers = headers.append(headerKeys[i],headerValues[i]);
        }
      }
      console.log('===headers===========>', headers);
      return headers;
    }
  
  }
  
