import { observable, action } from "mobx";
import Axios from 'axios'

export default class AsyncStore {
    constructor(root) {
        this.root = root;
        this.getCityData(this.city[0])
    }

    @observable city = ['Seoul', 'Tokyo', 'Beijing', 'Toronto'];
    @observable cityData;
    
    @action
    getCityData = (city) => {
        this.cityData = undefined

        Axios.get(`https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`).then(res =>{
            this.cityData = res.data;
        })
    }
}