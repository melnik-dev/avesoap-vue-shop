export default {
    getCategory(state) {
        return state.data.сategory
    },
    getProduct(state) {
        return state.data.product
    },
    getCart(state) {
        return state.data.cart
    },
    getIsAuthorizationUser(state) {
        return state.user !== null
    },
    getUser(state) {
        return state.user
    },
}