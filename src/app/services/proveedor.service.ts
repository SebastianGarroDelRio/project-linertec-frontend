import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Proveedor } from '../models/proveedor.model';

const baseUrlProveedor = AppSettings.API_ENDPOINT+ '/crudProveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  registra(data:Proveedor):Observable<any>{
    return this.http.post(baseUrlProveedor +"/registraProveedor", data);
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
