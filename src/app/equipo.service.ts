import { Injectable } from '@angular/core';
import { Equipo } from './equipo';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[] = [];

  //Generate random code from letters and numbers
  getRandomUppercaseChar() {
    var r = Math.floor(Math.random() * 26);
    return String.fromCharCode(65 + r);
  }
  generateCode() {
    var integer = Math.floor((Math.random() * 10) * 7);
    for (var i = 0, prefix = ""; i < 2; ++i)
      prefix += this.getRandomUppercaseChar();
    return prefix + integer;
  }

  constructor() { }

  add(equipName: string) {
    if (this.equipos.length < 20) {
      this.equipos.push({ name: equipName, id: this.generateCode() });
    }

  }

  delete(equipID: string) {
    this.equipos = this.equipos.filter(function (el) { return el.id != equipID; });
  }

  getEquipos(): Observable<Equipo[]> {
    return of(this.equipos);
  }

}
