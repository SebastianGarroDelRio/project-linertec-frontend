import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class WebInicioComponent implements OnInit {

  //<img [src]="imagenUnoo" alt="">
  imagenUnoo = 'assets/Home/01-.png';
  imagenUno = 'assets/Home/01.png';
  imagenDoss = 'assets/Home/02-.png';
  imagenDos = 'assets/Home/02.png';
  arrow = 'assets/Home/arrow.png';
  contactenos = 'assets/Home/contactenos.png';
  fondoSlider = 'assets/Home/Fondo-slider.png';
  fotoUno = 'assets/Home/foto01.png';
  icon = 'assets/Home/icon.png';
  line = 'assets/Home/line.png';
  lineaUnoSlider = 'assets/Home/linea1slider.png';
  lineaDosSlider = 'assets/Home/linea2slider.png';
  lineaAzul = 'assets/Home/lineaazul.png';
  lineaAzulDos = 'assets/Home/lineaazul2.png';
  logoUno = 'assets/Home/logo1.jpg';
  logoDos = 'assets/Home/logo2.jpg';
  logoTres = 'assets/Home/logo3.jpg';
  logoCuatro = 'assets/Home/logo4.jpg';
  logoLinertec = 'assets/Home/logolinertec.png';
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
