import AsyncStore from './AsyncStore';

class RootStore {
  constructor() {
    this.async = new AsyncStore(this);
  }
}

export default RootStore;