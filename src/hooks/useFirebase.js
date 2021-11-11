import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState(' ');

    const auth = getAuth();
    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user information
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                setAuthError('');
                history.replace('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }



    const logInUser = (email, password, location, history) => {
        setIsLoading(true);
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('');
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }


    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    // save user to databse

    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logInUser,
        logOut,
    }
};

export default useFirebase;