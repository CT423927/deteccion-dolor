import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


declare const scan: any;

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class PacienteComponent implements OnInit {

  listExpressions: any = [];
  id!: number;
  private sub: any;

  onClick(){
    scan();
  }
  
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }


  customOptions: OwlOptions = {
    stagePadding: 0,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 0,
    navSpeed: 700,
    nav: false,
    items:4
  }

}
