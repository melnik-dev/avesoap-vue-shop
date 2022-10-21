import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData,
            categoryTitle: "state",
            // сategoryPath: ""б
            cart: [
                {
                    id: '1',
                    title: 'Мыло с маслом лавра, виноградными косточками и льняным маслом',
                    img: 'soap-lavr.jpg',
                    price: 221,
                    amount: 2,
                }
            ]
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
            console.log('delCart', productId);
            console.log(state.cart);
            state.cart = state.cart.filter(prod => {
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