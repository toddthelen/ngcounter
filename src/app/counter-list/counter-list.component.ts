import { Component, OnInit } from '@angular/core';
import Counter from '../counter';
import SuperCounter from '../super-counter';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  // Declare properties for use
  counters: Counter[];
  superCounters: SuperCounter[];
  name = 'Counter Wall';
  totalCounters: number;

  constructor() {
    // Define properties for editing
    this.counters = [];
    this.superCounters = [];
    this.totalCounters = 0;
  }

  ngOnInit() {
  }

  /**
   * Create a new counter object
   */
  create() {
    const counter = new Counter();
    this.counters.push(counter);
    this.totalCounters ++;
    if (this.totalCounters % 6 === 0) {
      this.upgrade();
    }
  }

  /**
   * Upgrade 6 counters to 1 super counter
   */
  upgrade() {
    // get total value of the current 6 counters
    let total = 0;
    this.counters.forEach(c => {
      total += c.value;
    });
    // create super counter
    const superCounter = new SuperCounter();
    superCounter.value = total;
    // remove current counters
    this.counters = [];
    this.superCounters.push(superCounter);
  }
}
