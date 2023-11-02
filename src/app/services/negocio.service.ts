import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Negocio } from '../models/negocio.model';

const baseUrlNegocio = AppSettings.API_ENDPOINT+ '/negocio';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(private http:HttpClient) { }

  registra(data:Negocio):Observable<any>{
    return this.http.post(baseUrlNegocio +"/registraNegocio", data);
  }

}