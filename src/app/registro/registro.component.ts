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

  logearse() {
    this.logeo.emit(true);
  }
}
