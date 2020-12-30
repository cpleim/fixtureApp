import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {

  listEquipos: Equipo[];
  generatedFixture: string[][] = [];
  objEquipo: any;

  constructor(private equipoService: EquipoService) {
    this.listEquipos = [];
  }

  generateButtonHandler(): boolean {
    if (this.listEquipos.length >= 4 && this.listEquipos.length <= 20 && this.listEquipos.length % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }


  generate(): void {
    if (this.listEquipos.length < 4) {
      //menor a 4
      alert("La cantidad de equipos es menor a 4!");
    } else if (this.listEquipos.length % 2 != 0) {
      //impares
      alert("La cantidad de equpos es impar!");
    } else {

      for (let j = 0; j < this.listEquipos.length - 1; j++) {
        this.generatedFixture[j] = [];
        for (let i = 0; i < this.listEquipos.length / 2; i++) {
          this.generatedFixture[j][i] = this.listEquipos[i].name + " VS " + this.listEquipos[this.listEquipos.length - 1 - i].name;
        }
        this.objEquipo = this.listEquipos.pop();
        this.listEquipos.splice(1, 0, this.objEquipo);
      }
    }
  }

  getEquipos(): void {
    this.equipoService.getEquipos()
      .subscribe(equipos => { this.listEquipos = equipos; this.generateButtonHandler() });
  }


  ngOnInit(): void {
    this.getEquipos();
  }

}
