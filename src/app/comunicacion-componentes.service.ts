import { Injectable, Output,EventEmitter } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class ComunicacionComponentesService {

  @Output() disparadorEnviar : EventEmitter<any> = new EventEmitter();

  @Output() disparadorEnviarCambiosFisicos : EventEmitter<any> = new EventEmitter();
  constructor() { }
}
