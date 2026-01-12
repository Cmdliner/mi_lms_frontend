'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    auth: {
        accessToken?: string;
    };
    setAuth: (auth: { accessToken?: string }) => void;
    isAuthenticated: boolean;
    clearAuth: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuthState] = useState<{ accessToken?: string }>({});
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!auth.accessToken;

    const setAuth = (authData: { accessToken?: string }) => {
        console.log('setAuth called with:', authData);
        setAuthState(authData);
        if (authData.accessToken) {
            localStorage.setItem('accessToken', authData.accessToken);
            console.log('Token stored in localStorage');
        }
    };

    const clearAuth = () => {
        console.log('clearAuth called');
        setAuthState({});
        localStorage.removeItem('accessToken');
    };

    useEffect(() => {
        console.log('AuthProvider mounting...');
        const storedToken = localStorage.getItem('accessToken');
        
        if (storedToken) {
            console.log('Found stored token, setting auth state');
            setAuthState({
                accessToken: storedToken
            });
        } else {
            console.log('No stored token found');
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, isAuthenticated, clearAuth, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
