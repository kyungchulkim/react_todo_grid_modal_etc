import { observable, action, toJS } from "mobx";

export default class GridStore {
    constructor(root) {
        this.root = root;
    }

    @observable oriGridData = [
        { name: 'Jack', age: '20', height: '70' },
        { name: 'Lee', age: '30', height: '88' },
        { name: 'Chuck', age: '17', height: '75' },
        { name: 'Ralph', age: '41', height: '69' },
        { name: 'Mark', age: '25', height: '80' },
    ]

    @observable gridData = [
        { name: 'Jack', age: '20', height: '70' },
        { name: 'Lee', age: '30', height: '88' },
        { name: 'Chuck', age: '17', height: '75' },
        { name: 'Ralph', age: '41', height: '69' },
        { name: 'Mark', age: '25', height: '80' },
    ]

    @observable keys = ['name', 'age', 'height']
    @observable keysArrow = { name: '', age: '', height: '' }
    @observable activeTable = '';

    @action
    sortData = (key) => {
        this.activeTable = key;
        this.keysArrow[key] === '' && this.setKeysArrow(key,-1)
        let selfArrow = this.keysArrow[key]

        const sorted = this.gridData.slice().sort(function (a, b) {
            if (a[key] > b[key]) {
                return selfArrow
            }
            if (a[key] < b[key]) {
                return selfArrow * -1
            }
            return 0;
        })

        this.setKeysArrow(key,this.keysArrow[key] * -1)
        this.gridData = sorted
    }

    @action
    setKeysArrow = (key,value) => {
        this.keysArrow[key] = value
    }

    @action
    searchData = (value) => {
        if(value === '') {
            this.gridData = this.oriGridData
        }

        this.gridData = this.gridData.filter(data=> data.name.toUpperCase().includes(value.toUpperCase()) || data.age.includes(value) || data.height.includes(value))
        
    }
}