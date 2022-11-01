import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            isAuthorization: false
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
        getIsAuthorization(state) {
            return state.isAuthorization
        }
    },
    mutations: {
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
        addToCard(state, newProduct) {
            let isProductToCart = true;
            state.data.cart.forEach(productCart => {
                if (productCart.id === newProduct.id) {
                    isProductToCart = false;
                    productCart.amount = productCart.amount + newProduct.amount;
                }
            });
            if (isProductToCart) {
                state.data.cart.push(newProduct);
            }
        },
        deleteFromCart(state, productId) {
            console.log('store', productId);
            console.log(state.data.cart);
            state.data.cart = state.data.cart.filter(prod => {
               return prod.id !== productId;
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