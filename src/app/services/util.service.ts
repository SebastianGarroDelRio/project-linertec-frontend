import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Cliente } from '../models/cliente.model';
import { Usuario } from '../models/usuario.model';
import { Servicio } from '../models/servicio.model';
//import { Pais } from '../models/pais.model';
//import { DataCatalogo } from '../models/dataCatalogo.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  constructor(private http:HttpClient) { }

  // listaPais():Observable<Pais[]>{
  //   return this.http.get<Pais[]>(baseUrlUtil+"/listaPais");
  // }

  // listaAlumno():Observable<Alumno[]>{
  //   return this.http.get<Alumno[]>(baseUrlUtil+"/listaAlumno");
  // }

  // listaCategoriaDeLibro():Observable<DataCatalogo[]>{
  //   return this.http.get<DataCatalogo[]>(baseUrlUtil+"/listaCategoriaDeLibro");
  // }

}


