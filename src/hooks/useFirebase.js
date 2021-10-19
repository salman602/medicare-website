import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseInitializer from "../Firebase/firebase.init";


firebaseInitializer();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    // Email/ password sign in method
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleDisplayName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = (e) => {
        e.preventDefault()

        // password validation
        if (password.length < 8) {
            setError('Password must be at least 8 charecter long.');
            return;
        };
        registerNewUser(email, password);
    };

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateUserInfo();
            })
            .catch(err => setError(err.message));
    }

    // update user information (set user's displayName)
    const updateUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => { })
            .catch((error) => {
                setError(error.message)
            });
    }

    const signInUsingEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(err => setError(err.message))

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

    // observe if user state is changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        })
        return () => unSubscribe;
    }, [auth]);

    // implement logout 
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
        handleDisplayName,
        handleEmail,
        handlePassword,
        handleSignUp,
        signInUsingEmailAndPassword
    }
};

export default useFirebase;