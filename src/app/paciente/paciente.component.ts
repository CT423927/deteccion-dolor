import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Paciente } from '../models/paciente.model';
import { MongoService } from '../services/mongo.service';


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

  @Input() currentPaciente: Paciente = {
    nombre: '',
    fechaNacimiento: null,
    sexo: '',
    contacto: '',
    fechaIngreso: null,
    fechaAlta: null,
    ingresado: null,
  };
  
  listExpressions: any = [];
  id!: number;
  private sub: any;

  onClick(){
    scan();
  }
  
  constructor(private route: ActivatedRoute, private mongoService: MongoService,) {}


  ngOnInit() {

    this.getTutorial(this.route.snapshot.params["id"]);
  }

  getTutorial(id: string): void {
    this.mongoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPaciente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
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
