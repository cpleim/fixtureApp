import { Component } from '@angular/core';
import { EquipoService } from './equipo.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fixture App';

  constructor(private equipoService: EquipoService) {
  }

  addEquipo(): void {
    this.equipoService.add(this.profileForm.value.nombre);
    this.profileForm.controls["nombre"].setValue("");
  }

  profileForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
    ])
  });


  ngOnInit() {

  }

}
