import { Component } from '@angular/core';
import { DadosComponent } from '../dados/dados.component';

@Component({
  selector: 'app-tirardados',
  standalone: true,
  imports: [DadosComponent],
  templateUrl: './tirardados.component.html',
  styleUrl: './tirardados.component.css'
})
export class TirardadosComponent {
  n1: number = 0
  n2: number = 0
  n3: number = 0
  resultado: string = "Tira para jugar"
  contador: number = 0

  tirar() {
    //deñ 1 añ 6 con numeros aleatorios
    this.n1 = Math.floor(Math.random() * 5) + 1
    this.n2 = Math.floor(Math.random() * 5) + 1
    this.n3 = Math.floor(Math.random() * 5) + 1

    if(this.n1==this.n2&& this.n1==this.n3){
      this.resultado="Feliciadaes. Ganaste!!. "
      this.contador=0
    }else{
      this.contador++
      this.resultado="No flaco, perdiste, vuelve a intentar. " + this.contador
    }
  }
}
