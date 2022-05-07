import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AvisosComponent } from './avisos/avisos.component';
import { TarjetaResumenComponent } from './tarjeta-resumen/tarjeta-resumen.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PacienteComponent } from './paciente/paciente.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WebcamComponent } from './webcam/webcam.component';
import { MicroComponent } from './micro/micro.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { PulseraComponent } from './pulsera/pulsera.component'; 

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PacientesComponent,
    AvisosComponent,
    TarjetaResumenComponent,
    AlertaComponent,
    PacienteComponent,
    WebcamComponent,
    MicroComponent,
    MovimientoComponent,
    PulseraComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }