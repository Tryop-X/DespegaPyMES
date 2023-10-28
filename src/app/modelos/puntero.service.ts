import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PunteroService {
  private numeroSource = new BehaviorSubject<number>(0); // 0 es el valor inicial
  numeroActual = this.numeroSource.asObservable();

  constructor() {}

  cambiarNumero() {
    this.numeroSource.next(this.numeroSource.value + 1);  }
}
