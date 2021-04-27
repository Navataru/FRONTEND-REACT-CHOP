import {makeAutoObservable} from "mobx";

export default class UserdataStore {

    constructor() {
        this._userData = {}
        makeAutoObservable(this)
    }

    get userData() {
        return this._userData;
    }

    setUserData(value) {
        this._userData = value;
    }

}
