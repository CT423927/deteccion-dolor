import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Paciente } from '../models/paciente.model';
import { MongoService } from '../services/mongo.service';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';


import { ComunicacionComponentesService } from '../comunicacion-componentes.service';


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
  requestTimeout: NodeJS.Timeout;

  onClick(){
    scan();
  }
  
  constructor(private route: ActivatedRoute, private mongoService: MongoService, private http: HttpClient, private servicioCom:ComunicacionComponentesService) {}

  vocalizacion=0;
  expresionFacial=0;
  cambiosLenguajeCorporal=0;
  cambiosComportamiento=0;
  cambiosFisicologicos=0;
  cambiosFisicos=0;
  puntuacionTotal:number=0;

  ngOnInit() {

    this.getTutorial(this.route.snapshot.params["id"]);

    this.servicioCom.disparadorEnviar.subscribe(data =>{
      console.log(data.data.cambioComportamiento);
      this.cambiosComportamiento=data.data.cambioComportamiento;
    });

    this.servicioCom.disparadorEnviarCambiosFisicos.subscribe(data =>{
      console.log(data.data.cambioFisico);
      this.cambiosFisicos=data.data.cambioFisico;
    });

    this.servicioCom.disparadorVocalizacion.subscribe(data =>{
      console.log(data.data.vocalizacion);
      this.vocalizacion=data.data.vocalizacion;
    });

    this.servicioCom.disparadorExpresionFacial.subscribe(data =>{
      console.log(data.data.expresionFacial);
      this.expresionFacial=data.data.expresionFacial;
    });

    this.servicioCom.disparadorLenguajeCorporal.subscribe(data =>{
      console.log(data.data.lenguajeCorporal);
      this.cambiosLenguajeCorporal=data.data.lenguajeCorporal;
    });

    this.servicioCom.disparadorFisicologicos.subscribe(data =>{
      console.log(data.data.cambiosFisicologicos);
      this.cambiosFisicologicos=data.data.cambiosFisicologicos;
    });

    this.refreshObject();

  }

  refreshObject(): void {
    this.http.get('http://localhost:8080/obtenerPuntuacionFinal').subscribe(data => {
            this.puntuacionTotal=JSON.parse(data.toString());
            console.log("PUNTUACION FINAL" + this.puntuacionTotal);
            this.requestTimeout = setTimeout(() => this.refreshObject(), 1000);
        });
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
