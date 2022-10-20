import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            categoryTitle: "state",
            // сategoryPath: ""
        }
    },
    getters: {
        getCategory(state) {
            return state.data.сategory
        },
        getProduct(state) {
            return state.data.product
        },
        getCart(state) {
            return state.data.cart
        },
        getCategoryTitle(state) {
            return state.categoryTitle
        },
        // getCategoryPath(state) {
        //     return state.сategoryPath
        // },
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
        },
        delCart(state, productId) {
            console.log('delCart');
            state.data.cart = state.data.cart.filter(prod => {
               return  prod.id = productId;
            });
        }
    }
})

export default store;