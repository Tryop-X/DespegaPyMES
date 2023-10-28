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


  recompensas = [
    {
      'img': 'despega',
      'nombre': 'despega',
      'descripcion': '10 soles en tu cuenta'
    },
    {
      'img': 'yape',
      'nombre': 'Yape',
      'descripcion': '10 soles en tu cuenta'
    },
    {
      'img': 'yape',
      'nombre': 'Yape',
      'descripcion': '10 soles en tu cuenta'
    },
    {
      'img': 'yape',
      'nombre': 'Yape',
      'descripcion': '10 soles en tu cuenta'
    },
    {
      'img': 'yape',
      'nombre': 'Yape',
      'descripcion': '10 soles en tu cuenta'
    },
    {
      'img': 'yape',
      'nombre': 'Yape',
      'descripcion': '10 soles en tu cuenta'
    },
  ]

  constructor(
    private punteroService: PunteroService
  ) {}




  ngOnInit() {
    this.punteroService.numeroActual.subscribe((num) => {
      this.punteroCallenge = num;
    });
  }
}
