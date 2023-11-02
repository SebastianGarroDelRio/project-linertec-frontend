import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Servicio } from '../models/servicio.model';

const baseUrlPrueba = AppSettings.API_ENDPOINT+ '/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  registrar(data:Servicio):Observable<any>{
    return this.http.post(baseUrlPrueba +"/registraServicio", data);
  }

}