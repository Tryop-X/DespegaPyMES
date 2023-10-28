import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  dni = new FormControl('', [Validators.required, Validators.email]);
  @Output() logeo = new EventEmitter<boolean>();

  // componente que simula el login y el método hace eso posible, emitimos un evento que el componente padre verá y cambiará el estado y dejará
  // otros componente.
  logearse() {
    this.logeo.emit(true);
  }
}
