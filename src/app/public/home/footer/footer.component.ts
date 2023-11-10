import { Component } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent  {
  //<img [src]="logoImagePath" alt="Linertec Logo">
  fb = 'assets/Home/fb.png';
  ig = 'assets/Home/ig.png';
  yt = 'assets/Home/yt.png';
}