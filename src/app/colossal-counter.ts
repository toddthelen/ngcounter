import Counter from './counter';

export class ColossalCounter extends Counter {
  constructor(level) {
    super();
    this.level = level || 3;
  }
}
