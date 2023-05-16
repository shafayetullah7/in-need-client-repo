import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,user => {
        if (user) {
        // User is signed in
        setUser(user);
        } else {
        // User is signed out
        setUser(null);
        }
        setLoading(false);
    });
    

    return () => {
        // Unsubscribe from the listener when the component is unmounted
        unsubscribe();
    };
    }, []);

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
    loading
    };


    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;