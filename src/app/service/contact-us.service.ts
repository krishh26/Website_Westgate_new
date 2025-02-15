import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
export enum FOIEndPoint {
  CONTACT_US = '/contact-us',
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
    this.baseUrl = environment.baseUrl;
  }

contactUs(payload: any): Observable<any> {
  return this.httpClient
    .post<any>(this.baseUrl + FOIEndPoint.CONTACT_US, payload);
}

}
