import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {

  time = new Date();
  timer: any = null!;

  @Input() text = "";

  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.time = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
      //console.log("O evento onChanges disparou com as seguintes mudanças" + changes);
      console.log(changes);

  }

  ngOnDestroy(): void {
      clearInterval(this.timer);
  }
}
