import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  @Input() color!: string;
  @Input() paciente!: string;
  @Input() ritmo!: boolean;
  @Input() emocion!: boolean;
  @Input() sudoracion!: boolean;
  @Input() estres!: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
