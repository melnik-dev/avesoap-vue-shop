import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            categoryTitle: "state",
        }
    },
    getters: {
        getCategory(state) {
            return state.data.сategory
        },
        getProduct(state) {
            return state.data.product
        },
        getFavorite(state) {
            return state.data.favorite
        },
        getCategoryTitle(state) {
            return state.categoryTitle
        },
    },
    mutations: {
        setСategoryTitle(state, cat) {
            state.categoryTitle = cat;
        },
        setFavorite(state, productId) {
            state.data.product.forEach(item => {
                if(item.id === productId) {
                    item.isFavorite = !item.isFavorite;
                }
            })
        },
        delFavorite(state, productId) {
            state.data.product.forEach(item => {
                if(item.id === productId) {
                    item.isFavorite = false;
                }
            })
        }
    }
})

export default store;