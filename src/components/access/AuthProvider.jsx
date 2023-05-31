import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,user => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
        setLoading(false);
    });
    return () => {
        unsubscribe();
    };
    }, []);

    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password);
    };

    const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
    };

    const logout = ()=>{
    return signOut(auth);
    }

    const authInfo = {
    user,
    createUser,
    signIn,
    logout,
    loading,
    setLoading,
    googleSignIn
    };


    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;