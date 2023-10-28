import { Component, Inject, OnInit, OnDestroy  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {PasoModel} from "../modelos/paso.model";
@Component({
  selector: 'app-callenge',
  templateUrl: './callenge.component.html',
  styleUrls: ['./callenge.component.scss']
})
export class CallengeComponent implements OnInit, OnDestroy {

  public progress = 0;
  private intervalId: any;

  public vidas: number[] = [];

  numPregunta: number = 0;

  perdido: boolean = false;
  iniciado: boolean = false;
  ganado = false;
  constructor(
    public dialogRef: MatDialogRef<CallengeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PasoModel,
  ) {
  }


  ngOnInit() {
    this.data.preguntas.forEach( p => this.vidas.push(-1))
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  incrementProgress() {
    if (this.progress < 100) {
      this.progress += 1;
    } else {
      this.probarPerdida(0)
    }
  }

  responder(respuesta: boolean){
    const isCorrect = this.data.preguntas[this.numPregunta].respuesta === respuesta;
    this.probarPerdida( isCorrect ? 1 : 0);
  }

  probarPerdida(jugada: number){
    this.progress = 0;
    this.vidas[this.numPregunta] = jugada;
    this.numPregunta ++;
    if(this.vidas.filter(v => v === 0).length > 4) {
      this.perdido = true;
      this.intervalId = setInterval(() => {
        this.close(false);
      }, 10000);
      return;
    }

    if(this.vidas.length === this.numPregunta){
      this.ganado = true;
      this.intervalId = setInterval(() => {
        this.close(true);
      }, 10000);
      return;
    }
  }

  get backgroundColor() {
    const red = Math.min(255, (this.progress * 2.55));
    const green = 255 - red;
    return `rgb(${red}, ${green}, 0)`;
  }

  close(resultado: boolean) {
    this.dialogRef.close({resultado});
  }
  iniciar() {
    this.iniciado = true;
    this.intervalId = setInterval(() => {
      this.incrementProgress();
    }, 200);
  }
  abrirEnNuevaPestana() {
    window.open('https://www.viabcp.com/campus-abc/presupuesto-y-ahorro-modulos/', '_blank');
  }
}
