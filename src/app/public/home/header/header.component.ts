import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  logoImagePath = 'assets/Home/logo.png';

  isLogged = false;
  opcInicio : [] = [];
  opcNosotros : [] = [];
  opcServicios : [] = [];
  opcProyectos : [] = [];
  opcContactanos : [] = [];
  opcLogin : [] = [];

  ngOnInit() {
    
  }

}

