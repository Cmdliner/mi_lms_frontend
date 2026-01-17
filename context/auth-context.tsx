'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    auth: {
        accessToken?: string;
        role?: string;
    };
    setAuth: (auth: { accessToken?: string; role?: string }) => void;
    isAuthenticated: boolean;
    clearAuth: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuthState] = useState<{ accessToken?: string, role?: string }>({});
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!auth.accessToken;

    const setAuth = (authData: { accessToken?: string; role?: string }) => {
        setAuthState(authData);
        if (authData.accessToken) {
            localStorage.setItem('accessToken', authData.accessToken);
            localStorage.setItem('role', authData.role || '');
        }
    };

    const clearAuth = () => {
        setAuthState({});
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        const storedRole = localStorage.getItem('role');
        
        if (storedToken) {
            console.log('Found stored token, setting auth state');
            setAuthState({
                accessToken: storedToken,
                role: storedRole || undefined
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
