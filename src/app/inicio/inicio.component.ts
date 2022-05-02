import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
   
    customOptions: OwlOptions = {
      stagePadding: 60,
      loop: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      margin: 30,
      navSpeed: 700,
      nav: false,
      items:4
    }
}
