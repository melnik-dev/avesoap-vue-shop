import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            categoryTitle: "sxsx",
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
        getCategoryTitle (state) {
            return state.categoryTitle
        },
    },
    mutations: {
        setCategoryTitle (state, cat) {
            state.categoryTitle = cat;
        }
    }
})

export default store;