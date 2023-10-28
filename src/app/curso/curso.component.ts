import {Component, Input, OnInit} from '@angular/core';
import {CursoModel} from "../modelos/curso.model";
import {MatDialog} from "@angular/material/dialog";
import {PunteroService} from "../modelos/puntero.service";

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit{

  @Input("curso") curso: CursoModel = new CursoModel();
  @Input("punteroCurso") punteroCurso: number = 0;
  @Input("punteroCallenge") punteroCallenge: number = 0;
  @Input("indice") indice: number = 0;

  // Carga de data dummy
  recompensas = [
    {
      'img': 'minegociobcp',
      'nombre': 'minegociobcp',
      'url': 'https://www.viabcp.com/pymes/financiamiento/liquidez-para-negocio/minegociobcp'
    },
    {
      'img': 'wally',
      'nombre': 'Wally',
      'url': 'https://www.viabcp.com/pymes/otros-servicios/wally-punto-de-venta'
    },
    {
      'img': 'recompensa',
      'nombre': 'Recompensa',
      'url': 'https://www.viabcp.com/pymes'
    },
    {
      'img': 'recompensa',
      'nombre': 'Recompensa',
      'url': 'https://www.viabcp.com/pymes'
    },
    {
      'img': 'recompensa',
      'nombre': 'Recompensa',
      'url': 'https://www.viabcp.com/pymes'
    },
    {
      'img': 'recompensa',
      'nombre': 'Recompensa',
      'url': 'https://www.viabcp.com/pymes'
    },
  ]

  constructor(
    private punteroService: PunteroService
  ) {}

  // nos hemos suscrito al observador para saber que puntuación tiene el jugador
  // el puntero callenge guarda la cantidad de niveles que ha pasado el jugador.
  ngOnInit() {
    this.punteroService.numeroActual.subscribe((num) => {
      this.punteroCallenge = num;
    });
  }
}
