import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AvisosComponent } from './avisos/avisos.component';
import { TarjetaResumenComponent } from './tarjeta-resumen/tarjeta-resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PacientesComponent,
    AvisosComponent,
    TarjetaResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
