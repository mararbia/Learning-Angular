import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service2-example',
  templateUrl: './service2-example.component.html',
  styleUrls: ['./service2-example.component.css']
})
export class Service2ExampleComponent {
  description = "";

  constructor(public logger: LoggerService){}

  addProduct(){
    //console.log(`A descrição do produto ${this.description} foi adicionada`);
    this.logger.logger(`O produto com a descrição ${this.description} foi adicionado`);
  }
}
