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
    getIsAuthorization(state) {
        return state.isAuthorization
    }
}