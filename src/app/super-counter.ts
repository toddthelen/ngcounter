import Counter from './counter';

export class SuperCounter extends Counter {
  constructor(public level) {
    super();
    this.level = level || 0;
  }
}

export default SuperCounter;
