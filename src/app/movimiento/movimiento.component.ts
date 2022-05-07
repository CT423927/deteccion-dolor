import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.scss']
})
export class MovimientoComponent implements OnInit {

  constructor() { }

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
    this.loadExternalScript('assets/movimiento/global.js')
    this.loadExternalScript('assets/movimiento/MotionDetector/WebCamCapture.js')
    this.loadExternalScript('assets/movimiento/MotionDetector/ImageCompare.js')
    this.loadExternalScript('assets/movimiento/MotionDetector/Core.js')
    this.loadExternalScript('assets/movimiento/main.js')
  }

  
}
