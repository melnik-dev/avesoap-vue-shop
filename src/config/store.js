import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            categoryTitle: "state",
            // сategoryPath: ""б
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
        deleteFromCart(state, productId) {
            console.log('store', productId);
            console.log(state.data.cart);
            state.data.cart = state.data.cart.filter(prod => {
                console.log('filter');
               return Number(prod.id) !== Number(productId);
            });

            // const cart = state.data.cart.filter(prod => {
            //     return Number(prod.id) !== Number(productId);
            // });
            // state.data = {
            //     ...state.data,
            //     cart,
            // }
        }
    }
})

// const cart = state.data.cart.filter( /* */);
// state.data = {
//     ...state.data,
//     cart,
// }

export default store;