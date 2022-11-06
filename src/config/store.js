import {createStore} from "vuex";
import getters from "./modules/getters.js";
import mutations from "./modules/mutations.js";
import actions from "./modules/actions.js";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            user: null,
            isAuthorizationUser: false
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
})


export default store;