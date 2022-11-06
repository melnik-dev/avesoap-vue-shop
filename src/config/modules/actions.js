import firebaseApp from '@/config/firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

export default {
    async signUp({ commit, state }, payload) {
        const auth = getAuth(firebaseApp);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                payload.email,
                payload.password);
            state.user = userCredential.user;
            commit('setIsAuthorizationUser');
        } catch (error) {
            console.log(error)
            throw error
        }
            // .then((userCredential) => {
            //     // Signed in
            //     state.user = userCredential.user;
            //     console.log(state.user);
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode);
            //     console.log(errorMessage);
            // });
    },
    async logIn({ commit, state }, payload) {
        const auth = getAuth(firebaseApp);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                payload.email,
                payload.password);
            state.user = userCredential.user;
            commit('setIsAuthorizationUser');
        } catch (error) {
            console.log(error)
            throw error
        }

            // .then((userCredential) => {
            //     // Signed in
            //     state.user = userCredential.user;
            //     console.log(state.user);
            //     state.isAuthorizationUser = true;
            //     console.log(state.isAuthorizationUser);
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode);
            //     console.log(errorMessage);
            // });
    }
}