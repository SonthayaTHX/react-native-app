import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); // เพิ่ม username ที่นี่

    const login = (user) => {
        setIsLoggedIn(true);
        setUsername(user); // ตั้งค่า username หลังจากเข้าสู่ระบบ
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername(''); // ล้าง username เมื่อออกจากระบบ
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
