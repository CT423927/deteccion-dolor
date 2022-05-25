import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComunicacionComponentesService } from '../comunicacion-componentes.service';


@Component({
  selector: 'app-pulsera',
  templateUrl: './pulsera.component.html',
  styleUrls: ['./pulsera.component.scss']
})



export class PulseraComponent implements OnInit {

  constructor(private http: HttpClient, private servicioCom:ComunicacionComponentesService) { }

  valorCambiosFisiologicos;
  valorCheckbox=false;
  cambiosFisiologicos = new FormGroup({
    cambiosFisiologicos: new FormControl('', Validators.required)
  });

  onCheckboxChange(e: any) {
    this.valorCheckbox=e.target.checked;
    console.log(e.target.checked);
    console.log("CHECK"+this.valorCheckbox);
  }

  submit(){
    this.valorCambiosFisiologicos = this.cambiosFisiologicos.value;
    console.log(this.valorCambiosFisiologicos);

    this.servicioCom.disparadorFisicologicos.emit({
      data:this.valorCambiosFisiologicos 
    });
    this.http.post<any>('http://localhost:8080/fisiologicosManual',  {valorCambiosFisiologicos: this.valorCambiosFisiologicos} ).subscribe(data => {
      next: (response) => console.log(response)
    });
  }

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  
  ngOnInit(): void {
    this.loadExternalScript('assets/webapp.bundle.js')
  }

}
