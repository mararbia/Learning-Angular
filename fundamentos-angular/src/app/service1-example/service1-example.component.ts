import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service1-example',
  templateUrl: './service1-example.component.html',
  styleUrls: ['./service1-example.component.css']
})
export class Service1ExampleComponent {
  name = "";

  constructor(private logger: LoggerService){}

  addName(){
    //console.log(`O nome ${this.name} foi adicionado`);
    this.logger.logger(`O nome ${this.name} foi adicionado`);
  }
}
