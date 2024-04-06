import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {  

 

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // category id collect 
    const [categoryId, setCategoryId] = useState(null);
    const categoryIdGenerate = id => {
        setCategoryId(id)
    }


    // create user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log out user
    const logOut = ()=> {
        setLoading(true);
        return signOut(auth);
    }

    // login user
    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=> {
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log("Current user in the auth state change", currentUser)
        });
        return ()=> {
            unSubscribe();
        }
    } ,[])


    // click details for current post data
    const [post, setPost] = useState(null);
    const postDetails = (post) =>{
        setPost(post);
    }



    const contextInfo = {categoryIdGenerate, categoryId, user, registerUser, logOut, login, postDetails, post, loading };
    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;