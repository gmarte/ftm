import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});    
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth){
            setAuth(auth);
        }

    }, []);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;