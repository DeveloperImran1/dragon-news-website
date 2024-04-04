import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    // category id collect 
    const [categoryId, setCategoryId] = useState(null);
    const categoryIdGenerate = id => {
       
        setCategoryId(id);
    }
    const contextInfo = {categoryIdGenerate, categoryId};
    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;