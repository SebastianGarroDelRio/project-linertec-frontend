import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Servicio } from '../models/servicio.model';

const baseUrlServicio = AppSettings.API_ENDPOINT+ '/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  registrar(data:Servicio):Observable<any>{
    return this.http.post(baseUrlServicio +"/registraServicio", data);
  }

  //   consultaPorNombre(filtro:string):Observable<Docente[]>{
//     return  this.http.get<Docente[]>(baseUrl +"/listaDocentePorNombreLike/"+filtro); 
// }  

// inserta(obj:Docente):Observable<any>{
//     return this.http.post(baseUrl +"/registraDocente", obj);
// }

// actualiza(obj:Docente):Observable<any>{
//     return this.http.put(baseUrl + "/actualizaDocente", obj);
// }

// elimina(idDocente:number):Observable<any>{
//     return this.http.delete(baseUrl + "/eliminaDocente/"+ idDocente);
// }

}