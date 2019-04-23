import { Component, OnInit, Input } from '@angular/core';
import { SuperDuperCounter } from '../super-duper-counter';

@Component({
  selector: 'super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  @Input() counter: SuperDuperCounter;

  constructor() { }

  ngOnInit() {}

  start() {
    setInterval(() => this.counter.value ++, 1000);
  }

}
