import firebaseApp from '@/config/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    signUp (_, payload) {
        const auth = getAuth(firebaseApp);
        createUserWithEmailAndPassword(
            auth,
            payload.email,
            payload.password.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
}