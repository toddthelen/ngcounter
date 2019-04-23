import Counter from './counter';

export class SuperDuperCounter extends Counter {
  constructor(level) {
    super();
    this.level = level || 0;
  }
}
