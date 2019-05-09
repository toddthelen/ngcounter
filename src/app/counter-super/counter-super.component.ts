import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../Counter';


// const defaultCount: number = 1;
// console.log("defaultCount ", defaultCount);

@Component({
  selector: 'counter-super',
  templateUrl: './counter-super.component.html',
  styleUrls: ['./counter-super.component.css']
})
export class CounterSuperComponent implements OnInit {
  @Input() count: Counter;

         constructor() {
    // this.count = defaultCount;
  }

  ngOnInit() {
  }
  
  decrease() { this.count.value -= 3; }

  increase() {
    this.count.value += 3;

    console.log("type count", this.count.value)
    // console.log("super count", this.count)
    // console.log("type count", typeof (this.count))
  }
}
