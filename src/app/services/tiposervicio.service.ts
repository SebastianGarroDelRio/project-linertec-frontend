import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { TipoServicio } from '../models/tiposervicio.model';

const baseUrlTipoServicio = AppSettings.API_ENDPOINT+ '/crudTipoServicio';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private http:HttpClient) { }

  registra(data:TipoServicio):Observable<any>{
    return this.http.post(baseUrlTipoServicio +"/registraTipoServicio", data);
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
