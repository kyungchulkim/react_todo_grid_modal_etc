import AsyncStore from './AsyncStore';
import CounterStore from './CounterStore';

class RootStore {
  constructor() {
    this.async = new AsyncStore(this);
    this.counter = new CounterStore(this);
  }
}

export default RootStore;