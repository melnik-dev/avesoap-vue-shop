export default {
    logOutUser(state) {
        state.user = null
    },
    addToFavorite(state, productId) {
        state.data.product.forEach(item => {
            if (item.id === productId) {
                item.isFavorite = !item.isFavorite;
            }
        })
    },
    deleteFromFavorite(state, productId) {
        state.data.product.forEach(item => {
            if (item.id === productId) {
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