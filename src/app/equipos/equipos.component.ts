import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})

export class EquiposComponent implements OnInit {

  equipos: Equipo[];
  selectedEquipo: Equipo;

  constructor(private equipoService: EquipoService) {
    this.selectedEquipo = { id: "", name: "" }; //not necessary, but selectedEquipo forces to be initialized in the constructor (maybe because of changes in the last release of TypeScript??)
    this.equipos = [];

  }

  ngOnInit() {
    this.getEquipos();
  }

  onSelect(equipo: Equipo): void {
    this.selectedEquipo = equipo;
  }

  getEquipos(): void {
    this.equipoService.getEquipos()
      .subscribe(equipos => this.equipos = equipos);
  }

  deleteEquipo(equipo: Equipo): void {
    this.equipoService.delete(equipo.id);
    this.getEquipos();
  }


}
