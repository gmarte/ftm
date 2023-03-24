import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState( localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {});    
    // useEffect(() => {
    //     const authLocal = JSON.parse(localStorage.getItem('auth'));
    //     if (authLocal){
    //         setAuth(authLocal);
    //     }
    // }, []);
    // useEffect(() => {
    //     console.log(`this is the auth change ${JSON.stringify(auth)}`);        
    //     localStorage.setItem('auth', JSON.stringify(auth));
    // }, [auth]);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;