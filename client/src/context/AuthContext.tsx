import React, { useState, useContext, useEffect } from 'react';

import { auth, googleProvider } from '../firebase';
const AuthContext = React.createContext<null>(null);
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser]: any = useState('');
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    function signUp(email: any, password: any) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }
    function updateName(displayName) {
        return currentUser.updateProfile({ displayName });
    }
    function resetPassword(email: string) {
        return auth.sendPasswordResetEmail(email);
    }
    function GoogleAuth() {
        return auth.signInWithPopup(googleProvider);
    }

    useEffect(() => {
        const unsubcriber = auth.onAuthStateChanged((user: any) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubcriber;
    }, []);

    const value: any = {
        currentUser,
        signUp,
        login,
        logout,
        resetPassword,
        updateName,
        GoogleAuth,
        users,
        setUsers,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
