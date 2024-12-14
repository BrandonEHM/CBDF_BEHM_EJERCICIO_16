import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TirardadosComponent } from './tirardados/tirardados.component';
import { DadosComponent } from './dados/dados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TirardadosComponent, DadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cbdf_behm_ejercicio16';
}
