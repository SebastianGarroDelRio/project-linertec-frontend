import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

import { FormControl } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-contrato',
  templateUrl: './crud-contrato.component.html',
  styleUrls: ['./crud-contrato.component.css']
})

export class CrudContratoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
