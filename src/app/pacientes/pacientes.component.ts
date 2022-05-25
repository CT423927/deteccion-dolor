import { Component, OnInit } from '@angular/core';
import { Paciente } from '../models/paciente.model';
import { MongoService } from '../services/mongo.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  
  pacientes?: Paciente[];
  currentPaciente: Paciente = {};
  currentIndex = -1;
  nombre = '';

  constructor(private mongoService: MongoService) { }

  ngOnInit(): void {

    this.retrievePacientes();

  }

  retrievePacientes(): void {
    this.mongoService.getAll()
      .subscribe({
        next: (data) => {
          this.pacientes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrievePacientes();
    this.currentPaciente = {};
    this.currentIndex = -1;
  }
  setActiveTutorial(tutorial: Paciente, index: number): void {
    this.currentPaciente = tutorial;
    this.currentIndex = index;
  }
  removeAllpacientes(): void {
    this.mongoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchTitle(): void {
    this.currentPaciente = {};
    this.currentIndex = -1;
    this.mongoService.findByTitle(this.nombre)
      .subscribe({
        next: (data) => {
          this.pacientes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
