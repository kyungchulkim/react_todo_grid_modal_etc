import AsyncStore from './AsyncStore';
import CounterStore from './CounterStore';
import GridStore from './GridStore';

class RootStore {
  constructor() {
    this.async = new AsyncStore(this);
    this.counter = new CounterStore(this);
    this.grid = new GridStore(this);
  }
}

export default RootStore;