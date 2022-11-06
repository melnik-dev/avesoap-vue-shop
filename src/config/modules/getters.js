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
        return state.isAuthorizationUser
    },
    getUser(state) {
        return state.user
    },
    isUserLogin(state) {
        return state.user !== null
    }
}