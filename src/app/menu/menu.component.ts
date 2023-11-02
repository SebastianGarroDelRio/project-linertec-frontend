import { Component, OnInit } from '@angular/core';
import { Opcion } from '../security/opcion';
import { TokenService } from '../security/token.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  opcUsuarios : Opcion[] = [];
  opcServicios : Opcion[] = [];
  opcClientes : Opcion[] = [];
  opcSolicitudes : Opcion[] = [];
  //
  opcNegocio : Opcion[] = [];

  constructor(private tokenService: TokenService) {
    console.log("MenuComponent >>> constructor >>> " + this.tokenService.getToken());
  }

  ngOnInit() {
    console.log("MenuComponent >>> ngOnInit >>> ");

    this.opcUsuarios = this.tokenService.getOpciones().filter( x => x.tipo === 1);
    this.opcServicios = this.tokenService.getOpciones().filter( x => x.tipo === 2);
    this.opcClientes = this.tokenService.getOpciones().filter( x => x.tipo === 3);
    this.opcSolicitudes = this.tokenService.getOpciones().filter( x => x.tipo === 4);
    //
    this.opcNegocio = this.tokenService.getOpciones().filter( x => x.tipo === 5);

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
    window.location.reload();
  }

}

