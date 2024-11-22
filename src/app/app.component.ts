import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./componentes/formulario/formulario.component";
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AplicacionWeather';
}
