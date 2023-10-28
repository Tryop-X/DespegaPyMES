import {PreguntasModel} from "./preguntas.model";

export class PasoModel {
  preguntas: PreguntasModel[];
  title: string;
  img: string;
  description: string;
  constructor() {
    this.preguntas = [];
    this.title = '';
    this.img = '';
    this.description = '';
  }
}
