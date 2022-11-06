import {createRouter, createWebHistory} from "vue-router";
import AveSoapHome from "../components/AveSoapHome/AveSoapHome.vue";
import AveSoapСatalog from "../components/AveSoapСatalog.vue";
import AveSoapProduct from "../components/AveSoapProduct.vue";
import AveSoapFavorite from "../components/AveSoapFavorite.vue";
import AveSoapCart from "../components/AveSoapCart.vue";
import AveSoapProfile from "../components/AveSoapProfile/AveSoapProfile.vue";
import AveSoapNotFound from "../components/AveSoapNotFound.vue";
import AveSoapProfileAuthorization from "@/components/AveSoapProfile/AveSoapProfileAuthorization";
import AveSoapProfileRegistration from "@/components/AveSoapProfile/AveSoapProfileRegistration";
import store from "@/config/store";


let router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/home", component: AveSoapHome, alias: "/"},
        {path: "/catalog", component: AveSoapСatalog},
        {path: "/product/:productId", component: AveSoapProduct},
        {path: "/favorite", component: AveSoapFavorite},
        {path: "/cart", component: AveSoapCart},
        {
            path: "/profile",
            component: AveSoapProfile,
            meta: {
                requiresAuth: true
            }
        },
        {path: "/authorization", component: AveSoapProfileAuthorization},
        {path: "/registration", component: AveSoapProfileRegistration},
        {path: "/:pathMatch(.*)*", component: AveSoapNotFound},
    ],
    scrollBehavior(to,
                   from,
                   savedPosition) {
        if (to.hash) {
            setTimeout(() => {
                const element = document.getElementById(to.hash.replace(/#/, ''))
                if (element && element.scrollIntoView) {
                    element.scrollIntoView({block: 'start', behavior: 'smooth'})
                }
            }, 1000)
            return {el: to.hash};
        } else if (savedPosition) {
            return savedPosition
        }
        return {top: 0}
    }
});
router.beforeEach((to, from, next) => {
        // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
        // else next()
        if (to.meta.requiresAuth && !store.state.isAuthorizationUser) {
            console.log('to ', to)
            console.log('from ', from)
            next('authorization')
        } else {
            console.log('no auth')
            next()
        }
    });
export default router