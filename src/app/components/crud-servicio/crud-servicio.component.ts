import { Component, OnInit } from '@angular/core';

import { Servicio } from 'src/app/models/servicio.model';
import { FormControl } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-servicio',
  templateUrl: './crud-servicio.component.html',
  styleUrls: ['./crud-servicio.component.css']
})
export class CrudServicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
