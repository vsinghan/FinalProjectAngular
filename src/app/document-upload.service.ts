import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentUploadService {

  _url: String = "http://localhost:8023/uploadFile";

  constructor(private httpClient: HttpClient) { }

  // uploadDocument(document: File): Observable<any> {

  //   return this.http.post<any>(this._url, document);
  // }

  uploadDocument(documentToUpload: File): Observable<any[]> {
    const endpoint = "http://localhost:8023/upload";
    const formData: FormData = new FormData();
    formData.append('file', documentToUpload, documentToUpload.name);
    // let headers = new Headers();
    //     /** In Angular 5, including the header Content-Type can invalidate your request */
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
       });
        let options = {
          headers: headers
        }
        return this.httpClient.post<any[]>(endpoint, formData);
      // .post(endpoint, formData, { headers: yourHeadersConfig })
      // .map(() => { return true; })
      // .catch((e) => this.handleError(e));
}
}
