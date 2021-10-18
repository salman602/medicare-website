import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseInitializer from "../Firebase/firebase.init";


firebaseInitializer();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    // Email/ password sign in method
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 8) {
            setError('Password must be at least 8 charecter long.');
            return;
        };

        registerNewUser(email, password);


    };

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
            })
            .catch(err => setError(err.message));
    }

    const signInUsingEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(err => setError(err.message));
    };

    // google sign in method

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => setError(error.message))
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch(err => setError(err.message))
    };

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handlePassword,
        handleSignUp,
        signInUsingEmailAndPassword
    }
};

export default useFirebase;