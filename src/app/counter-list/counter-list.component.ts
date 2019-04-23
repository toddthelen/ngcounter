import { Component, OnInit } from '@angular/core';
import Counter from '../counter';
import { SuperCounter } from '../super-counter';
import { SuperDuperCounter } from '../super-duper-counter';
import {ColossalCounter} from '../colossal-counter';

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
  superDupers: SuperDuperCounter[];
  colossalCounters: ColossalCounter[];
  name = 'Counter Wall';

  constructor() {
    // Define properties for editing
    this.counters = [];
    this.superCounters = [];
    this.superDupers = [];
    this.colossalCounters = [];
  }

  ngOnInit() {
  }

  /**
   * Create a new counter object
   */
  create() {
    const counter = new Counter();
    this.counters.push(counter);
    if (this.counters.length % 6 === 0) {
      this.upgrade();
    }
    if (this.superCounters.length % 3 === 0) {
      this.superUpgrade();
    }
    if (this.superDupers.length % 3 === 0) {
      this.colossalUpgrade();
    }
  }

  /**
   * Upgrade 6 counters to 1 super counter
   */
  upgrade() {
    let level;
    // get total value of the current 6 counters
    const total = this.counters
      .map(c => { level = c.level + 1; return c.value; })
      .reduce((acc, val) => acc + val );
    // create super counter
    const superCounter = new SuperCounter(level);
    superCounter.value = total;
    // remove current counters
    this.counters = [];
    this.superCounters.push(superCounter);
  }

  /**
   * Upgrade 3 SuperCounters to 1 SuperDuperCounter
   */
  superUpgrade() {
    let level;
    // get total value of the current 6 counters
    const total = this.superCounters
      .map(c => { level = c.level + 1; return c.value; })
      .reduce((acc, val) => acc + val );
    // create super counter
    const superDuperCounter = new SuperDuperCounter(level);
    superDuperCounter.value = total;
    // remove current super counters
    this.superCounters = [];
    this.superDupers.push(superDuperCounter);
  }

  /**
   * Upgrade 3 SuperDuperCounters to 1 ColossalCounter
   */
  colossalUpgrade() {
    let level;
    // get total value of the current 6 counters
    const total = this.superDupers
      .map(c => { level = c.level + 1; return c.value; })
      .reduce((acc, val) => acc + val );
    // create super counter
    const colossalCounter = new ColossalCounter(level);
    colossalCounter.value = total;
    // remove current super counters
    this.superDupers = [];
    this.colossalCounters.push(colossalCounter);
  }
}
