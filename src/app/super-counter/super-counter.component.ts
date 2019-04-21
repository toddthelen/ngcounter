import { Component, OnInit, Input } from '@angular/core';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() counter: SuperCounter;
  level: number;

  constructor() {
    this.level = 1;
  }

  ngOnInit() {
  }

  /**
   * Increase the counter value
   */
  increment() {
    this.counter.value++;
  }

  /**
   * Decrease the counter value
   */
  decrement() {
    this.counter.value--;
  }

}
