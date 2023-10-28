import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abc-app';
  logeado: boolean = false;

  // Método usado para simular el login
  logearse(valor: boolean){
    this.logeado = valor;
  }
}
