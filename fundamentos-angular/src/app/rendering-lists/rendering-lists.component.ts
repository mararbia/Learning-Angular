import { Cellphone } from './../types/Cellphone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rendering-lists',
  templateUrl: './rendering-lists.component.html',
  styleUrls: ['./rendering-lists.component.css']
})
export class RenderingListsComponent {
  cellphones: Cellphone[] = [
    {id: 1, name: "Celular XL", description: "Um celular grande", soldOut: false },
    {id: 2, name: "Celular Normal", soldOut: false },
    {id: 3, name: "Celular Mini", description: "Um celular pequeno", soldOut: true },
  ]; //
}
