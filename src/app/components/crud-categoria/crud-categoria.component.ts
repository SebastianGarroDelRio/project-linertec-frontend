import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-crud-categoria',
  templateUrl: './crud-categoria.component.html',
  styleUrls: ['./crud-categoria.component.css']
})

export class CrudCategoriaComponent implements OnInit {

  ngOnInit(): void {
  }

}
