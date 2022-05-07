import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pulsera',
  templateUrl: './pulsera.component.html',
  styleUrls: ['./pulsera.component.scss']
})


export class PulseraComponent implements OnInit {

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
    this.loadExternalScript('assets/webapp.bundle.js')
  }

}
