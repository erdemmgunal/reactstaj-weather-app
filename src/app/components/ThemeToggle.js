"use client";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const toggleTheme = (event) => {
        event.stopPropagation();
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <div className="absolute top-0 right-0 p-16 cursor-pointer" onClick={toggleTheme}>
            {theme === 'dark' ? <FaMoon size={30} color='white'/> : <FaSun size={30} color="#1E1E29"/>}
        </div>
    );
}