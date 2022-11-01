import {createStore} from "vuex";
import getters from "./modules/getters.js";
import mutations from "./modules/mutations.js";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            isAuthorization: false
        }
    },
    getters: getters,
    mutations: mutations
})


export default store;