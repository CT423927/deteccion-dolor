import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambios-fisico',
  templateUrl: './cambios-fisico.component.html',
  styleUrls: ['./cambios-fisico.component.scss']
})
export class CambiosFisicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambioFisico = new FormGroup({
    cambioFisico: new FormControl('', Validators.required)
  });
    
  get f(){
    return this.cambioFisico.controls;
  }
    
  submit(){
    console.log(this.cambioFisico.value);
  }
  
  changeCambioFisico(e) {
    console.log(e.target.value);
  }

}
