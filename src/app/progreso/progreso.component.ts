import {Component, Input, OnInit} from '@angular/core';
import {CursoModel} from "../modelos/curso.model";
import {PasoModel} from "../modelos/paso.model";
import {MatDialog} from "@angular/material/dialog";
import {CallengeComponent} from "../callenge/callenge.component";
import {PreguntasModel} from "../modelos/preguntas.model";
import {PunteroService} from "../modelos/puntero.service";

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss']
})
export class ProgresoComponent implements OnInit{
  @Input("paso") paso: PasoModel = new PasoModel();
  @Input("punteroCallenge") punteroCallenge: number = 0;
  @Input("punteroCurso") punteroCurso: number = 0;
  @Input("indice") indice: number = 0;


  constructor(
    public dialog: MatDialog,
    private punteroService: PunteroService
  ) {}

  ngOnInit() {
    // nos suscribimos para ver si se cambia el nivel del jugador
    this.punteroService.numeroActual.subscribe((num) => {
      this.punteroCallenge = num;
    });
  }

  openCallenge(puede: boolean): void {
    // siempre que el usuario tenga el puntero apuntando justamente a este "progreso"
    // le va a dejar
    if (puede){
      this.paso.preguntas = this.shuffle(this.paso.preguntas);

      const dialogRef = this.dialog.open(CallengeComponent, {
        data: this.paso,
        width: '250px',
        enterAnimationDuration: 10,
        exitAnimationDuration: 10,
      });

      dialogRef.afterClosed().subscribe((res) => {
        if(res && res.resultado){
          this.punteroService.cambiarNumero();
        }
      });
    }
  }
  shuffle(array: PreguntasModel[]) {
    return array.sort(() => Math.random() - 0.5).slice(0, 6);
  }
}
