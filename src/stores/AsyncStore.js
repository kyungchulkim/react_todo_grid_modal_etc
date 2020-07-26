import { observable, action } from "mobx";

export default class AsyncStore {
    constructor(root) {
        this.root = root;
    }

    @observable city = ['Seoul', 'Tokyo', 'Beijing', 'Toronto',];


}