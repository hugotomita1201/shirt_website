'use client';

import { AppBar, Toolbar } from 'react95';

export const Footer = () => {
    return (
        <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <p style={{ flexGrow: 1 }}>
                    &copy; {new Date().getFullYear()} Vintage Shirt Store
                </p>
            </Toolbar>
        </AppBar>
    );
}; 