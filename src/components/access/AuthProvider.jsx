import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    // signInWithEmailAndPassword()
    };

    const updateUserProfile = (name,imgurl)=>{
        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:imgurl
        })
        .then(()=>console.log('profile updated'))
        .catch(err=>console.log(err))
    }

    const logout = ()=>{
    return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }

            return ()=>{
                unsubscribe();
            }
        })
    },[])

    const authInfo = {
    user,
    createUser,
    signIn,
    logout,
    loading,
    setLoading,
    googleSignIn,
    updateUserProfile
    };


    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;