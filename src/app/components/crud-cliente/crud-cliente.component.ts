import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css']
})

export class CrudClienteComponent implements OnInit {

//   //Para la Grilla
//   clientes: Cliente [] = [];
//   filtro: string ="";
 
//   //Para el tipo de docuento
//   nombreDocumento?: string;

//   //Para el estado
//   descripcionEstado?: string;

//   cliente: Cliente = {
//   idCliente: 0,
//   nombreCliente:"",
//   correo:"",
//   telefono:"",
//   direccion:"",
//   nombreContacto:"",
//   telefonoContacto:"",
//   //fechaNacimiento:"",
//   //fechaRegistro:"",
//   tipodocumento:{
//     idTipoDocumento:-1,
//     nombreDocumento:"-1",
//   },
//   numeroDocumento:"",
//   estado:{
//     idEstado:-1,
//     descripcionEstado:"-1"
//   }
// };


// //para verificar que e pulsó el boton
// submitted = false;

// formsRegistra = new FormGroup({
//   validaNombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñ0-9 ]{3,30}')]),
//   validaDni: new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}')]),
//   validaDepartamento: new FormControl('', [Validators.min(1)]),
//   validaProvincia: new FormControl('', [Validators.min(1)]),
//   validaDistrito: new FormControl('', [Validators.min(1)]),
// });

//   formsActualiza = new FormGroup({
//   validaNombreCliente: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
//   validaCorreo: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]')]),
//   validaTelefono: new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}')]),
//   validaDireccion: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]')]),
//   validaNombreContacto: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]')]),
//   validaTelefonoContacto: new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}')]),
//   validaFechaNacimiento: new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}')]),
//   validaTipoDocumento: new FormControl('', [Validators.min(1)]),
//   validaNumeroDocumento: new FormControl('', [Validators.required,Validators.pattern('[0-9]{20}')]),
//   validaEstado: new FormControl('', [Validators.min(1)]),
// });

//   constructor(private clienteService:ClienteService, private tipoDocumentoService:TipoDocumentoService, private estado:EstadoService) { 
//     this.TipoDocumentoService.listarTipoDocumento().subscribe(response => this.nombreDocumento = response);
//     this.EstadoService.listarEstado().subscribe(response => this.descripcionEstado = response);
//   }

//   cargaTipoDocumento(){
//     this.tipoDocumentoService.listarTipoDocumento(this.cliente.tipodocumento?.nombreDocumento).subscribe(response =>  this.estado= response);
//     this.nombreDocumentos = [];
//     this.cliente.tipodocumento!.idTipoDocumento = -1;

// }

// cargaEstado(){
//   this.estadoService.listarEstado(this.cliente.estado?.descripcionEstado).subscribe(response =>  this.provincias= response);
//   this.distritos = [];
//   this.docente.ubigeo!.idUbigeo = -1;
//   this.docente.ubigeo!.provincia = "-1";
// }

  ngOnInit(): void {
  }

}
