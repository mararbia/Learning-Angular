import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  nome = "João";
  birth_date = "1930-09-06";
  urlImage = "/assets/joao.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.birth_date}`);
  }
}
