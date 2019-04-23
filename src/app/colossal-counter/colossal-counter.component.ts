import { Component, OnInit, Input } from '@angular/core';
import { ColossalCounter } from '../colossal-counter';

@Component({
  selector: 'colossal-counter',
  templateUrl: './colossal-counter.component.html',
  styleUrls: ['./colossal-counter.component.css']
})
export class ColossalCounterComponent implements OnInit {
  @Input() counter: ColossalCounter;

  constructor() {}

  ngOnInit() {
    if (this.counter.level === 3) {
      setInterval(() => this.counter.value += 1, 1000);
    }
  }

}
