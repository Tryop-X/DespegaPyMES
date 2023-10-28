import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EscenarioComponent } from './escenario/escenario.component';
import { CursoComponent } from './curso/curso.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { MatDialogModule } from "@angular/material/dialog";
import { CallengeComponent } from './callenge/callenge.component';
import {MatButtonModule} from "@angular/material/button";
import { RecompensaComponent } from './recompensa/recompensa.component';
import { RegistroComponent } from './registro/registro.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    EscenarioComponent,
    CursoComponent,
    ProgresoComponent,
    CallengeComponent,
    RecompensaComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
