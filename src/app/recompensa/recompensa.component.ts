import {Component, Input, OnInit} from '@angular/core';
import {PunteroService} from "../modelos/puntero.service";

@Component({
  selector: 'app-recompensa',
  templateUrl: './recompensa.component.html',
  styleUrls: ['./recompensa.component.scss']
})
export class RecompensaComponent implements OnInit{
  @Input("recompensa") recompensa: any = undefined;
  punteroCallenge: number = 0;
  @Input("indice") indice: number = 0;


  constructor(
    private punteroService: PunteroService
  ) {}

  ngOnInit() {
    this.punteroService.numeroActual.subscribe((num) => {
      this.punteroCallenge = num;
    });
  }

  abrirEnNuevaPestana() {
    window.open(this.recompensa.url, '_blank');
  }
}
