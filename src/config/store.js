import {createStore} from "vuex";
import shopData from "../shopData";

const store = createStore({
    state() {
        return {
            data: shopData
            }
        },
    getters: {
        getCatalog (state) {
            return state.data.catalog
        }
    }
})

export default store;