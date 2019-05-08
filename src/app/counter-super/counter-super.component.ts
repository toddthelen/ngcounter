import { Component, OnInit, Input } from '@angular/core';

const defaultCount: number = 1;
console.log("defaultCount ", defaultCount);

@Component({
  selector: 'counter-super',
  templateUrl: './counter-super.component.html',
  styleUrls: ['./counter-super.component.css']
})
export class CounterSuperComponent implements OnInit {
  @Input() count: number;

  constructor() {
    this.count = defaultCount;
  }

  ngOnInit() {
  }

  decrease() { this.count -= 3; }

  increase() { this.count += 3; 
  console.log("super count", this.count)
  console.log("type count", typeof(this.count))}

}