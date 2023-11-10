import { Component, OnInit } from '@angular/core';
import { Opcion } from '../security/opcion';
import { TokenService } from '../security/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  opcDashBoard : Opcion[] = [];
  opcUsuarios : Opcion[] = [];
  opcServicios : Opcion[] = [];
  opcClientes : Opcion[] = [];
  opcSolicitudes : Opcion[] = [];
  opcInventario : Opcion[] = [];
  opcProveedor : Opcion[] = [];
  
  constructor(private tokenService: TokenService, private router: Router) {

    console.log("MenuComponent >>> constructor >>> " + this.tokenService.getToken());
  }

  ngOnInit() {
    console.log("MenuComponent >>> ngOnInit >>> ");

    this.opcDashBoard = this.tokenService.getOpciones().filter( x => x.tipo === 1);
    this.opcClientes = this.tokenService.getOpciones().filter( x => x.tipo === 2);
    this.opcSolicitudes = this.tokenService.getOpciones().filter( x => x.tipo === 3);
    this.opcServicios = this.tokenService.getOpciones().filter( x => x.tipo === 4);
    this.opcInventario = this.tokenService.getOpciones().filter( x => x.tipo === 6);
    this.opcUsuarios = this.tokenService.getOpciones().filter( x => x.tipo === 7);
    this.opcProveedor = this.tokenService.getOpciones().filter( x => x.tipo === 5);
    
    console.log("MenuComponent >>> ngOnInit >>> " + this.tokenService.getToken());
    if (this.tokenService.getToken()) {
      console.log("MenuComponent >>> this.isLogged = true >>> ");
      this.isLogged = true;
    } else {
      console.log("MenuComponent >>> this.isLogged = false >>> ");
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    //window.location.reload();
    this.router.navigate(['/login']);
  }

}

