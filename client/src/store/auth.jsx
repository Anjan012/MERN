import { createContext } from "react";
import { useContext } from "react";

// It is like a global store for auth related information
export const AuthContext = createContext();

// create a provider component
export const AuthProvider = ({children}) => {

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken); // first arg is the key, second is the value
    }
    return (
        // The moment yu pass value prop, all the children components can access it
        <AuthContext.Provider value={{ storeTokenInLS }}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook to use the auth context
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
}