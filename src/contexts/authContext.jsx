import { useState, createContext } from 'react';

const AuthContext = createContext();

const LOCALSTORAGE_AUTH_KEY = 'userData';

export function AuthProvider({ children }) {
    const [userId, setUserId] = useState(() => {
        const userData = JSON.parse(
            localStorage.getItem(LOCALSTORAGE_AUTH_KEY)
        );

        return userData ? userData.id : null;
    });

    const setUserDataInLocalStorage = (userData) => {
        // needs to clear because of supabase default auth settings
        localStorage.clear();

        setUserId(() => {
            localStorage.setItem('userData', JSON.stringify(userData));
            return userData;
        });
    };

    const value = {
        userId,
        setUserDataInLocalStorage,
        setUserId,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

AuthContext.displayName = 'AuthContext';

export default AuthContext;
