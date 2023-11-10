import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Contrato } from '../models/contrato.model';

const baseUrlContrato = AppSettings.API_ENDPOINT+ '/crudContrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http:HttpClient) { }

  registra(data:Contrato):Observable<any>{
    return this.http.post(baseUrlContrato +"/registraContrato", data);
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
