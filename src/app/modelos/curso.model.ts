import {PasoModel} from "./paso.model";

export class CursoModel {
  name: string;
  url: string;
  pasos: PasoModel[];
  public constructor() {
    this.name = '';
    this.url = '';
    this.pasos = [];
  }
}
