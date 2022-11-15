import firebaseApp from '@/config/firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import {getDatabase, ref, onValue} from "firebase/database";

export default {
    async signUp({state}, payload) {
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
    async logIn({state}, payload) {
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
    // async checkUser(state) {
    //     const auth = getAuth(firebaseApp);
    //     await new Promise((resolve) => {
    //         onAuthStateChanged(auth, (user) => {
    //             if (user) {
    //                 state.user = user
    //                 console.log('checkUser: User is sigin')
    //                 console.log(state.user)
    //             } else {
    //                 state.user = null
    //                 console.log('User is signed out')
    //             }
    //             resolve('good')
    //         })
    //     })
    //
    // },
    logOutUser({commit}) {
        const auth = getAuth(firebaseApp);
        auth.signOut();
        commit('logOutUser');
    },

    async getDataBase(state) {
        console.log('getDataBase')
        const db = getDatabase(firebaseApp);
        const starCountRef = ref(db);
        await onValue(starCountRef, (snapshot) => {
            console.log('snapshot')
            console.log(snapshot.val())
            state.data = snapshot.val();
        });
        console.log(state.baza)
    },
    // async writeUserData() {
    //     const db = getDatabase(firebaseApp);
    //     let prod = jsDB
    //     await set(ref(db), prod);
    // }

}