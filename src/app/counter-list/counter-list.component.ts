import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { CounterSuperComponent } from '../counter-super/counter-super.component';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[] = []; 
  superCounters: CounterSuperComponent[] = [];

  constructor() { }

  addCounter() {
    this.counters.push(new CounterDetailComponent())
    if (this.counters.length === 6) {
      this.superCounters.push(new CounterSuperComponent());
      this.counters = [];
    }
  }

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'counter-list',
//   templateUrl: './counter-list.component.html',
//   styleUrls: ['./counter-list.component.css']
// })
// export class CounterListComponent implements OnInit {

//   constructor() { 
//   }

//   ngOnInit() {
//   }

// }
