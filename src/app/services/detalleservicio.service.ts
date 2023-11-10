import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { DetalleServicio } from '../models/detalleservicio.model';


const baseUrlDetalleServicio = AppSettings.API_ENDPOINT+ '/crudDetalleServicio';

@Injectable({
  providedIn: 'root'
})
export class DetalleServicioService {

  constructor(private http:HttpClient) { }

  registra(data:DetalleServicio):Observable<any>{
    return this.http.post(baseUrlDetalleServicio +"/registraDetalleServicio", data);
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