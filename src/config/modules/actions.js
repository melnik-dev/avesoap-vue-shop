import firebaseApp from '@/config/firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

export default {
    async signUp({ state }, payload) {
        const auth = getAuth(firebaseApp);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                payload.email,
                payload.password);
            state.user = userCredential.user;
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    async logIn({ state }, payload) {
        const auth = getAuth(firebaseApp);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                payload.email,
                payload.password);
            state.user = userCredential.user;
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
    },
    checkUser(state) {
        const auth = getAuth();
       onAuthStateChanged(auth, (user) => {
            if (user) {
                state.user = user
                console.log('checkUser: User is sigin')
                console.log(state.user)
            } else {
                console.log('User is signed out')
            }
        });
    },
    logOutUser({commit}) {
        const auth = getAuth(firebaseApp);
        auth.signOut();
        commit('logOutUser');
    }

}