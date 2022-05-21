import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cambios-comportamiento',
  templateUrl: './cambios-comportamiento.component.html',
  styleUrls: ['./cambios-comportamiento.component.scss']
})
export class CambiosComportamientoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  valorCambioFisico;

  cambioComportamiento = new FormGroup({
    cambioFisico: new FormControl('', Validators.required)
  });
    
  get f(){
    return this.cambioComportamiento.controls;
  }
    
  submit(){
    this.valorCambioFisico = this.cambioComportamiento.value;
    this.http.post<any>('http://localhost:8080/cambiosFisicos',  {cambioFisico: this.valorCambioFisico} ).subscribe(data => {
      next: (response) => console.log(response)
    });
  }
  
  changeCambioFisico(e) {
    console.log(e.target.value);
  }

  ngOnInit(): void {
  }


}
