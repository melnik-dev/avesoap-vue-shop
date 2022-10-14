import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData
            }
        },
    getters: {
        getCategory (state) {
            return state.data.сategory
        },
        getProduct (state) {
            return state.data.product
        },
        getFavorite (state) {
            return state.data.favorite
        },
    }
})

export default store;