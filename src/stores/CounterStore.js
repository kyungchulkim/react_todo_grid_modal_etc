import { observable, action } from "mobx";

export default class CounterStore {
    constructor(root) {
        this.root = root;
    }

    @observable count = 0;
    @observable status = 'waiting..'

    @action setCounter = (calc) => {
        calc === 'plus' ? (this.count++, this.status = 'increment') : (this.count--, this.status = 'decrement')
    }
}