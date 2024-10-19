import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegadorComponent } from "./navegador/navegador.component";
import { Ejemplo1Component } from "./formularios/ejemplo1/ejemplo1.component";
import { Ejemplo2Component } from './formularios/ejemplo2/ejemplo2.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';
import { CineComponent } from './formularios/cine/cine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegadorComponent, Ejemplo1Component, Ejemplo2Component,ResistenciasComponent,CineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFormularios';
}
