'use client';

import { AppBar, Toolbar } from 'react95';
import Link from 'next/link';
import { Cart } from './Cart';

export const Header = () => {
    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Vintage Shirts
                </Link>
                <Cart />
            </Toolbar>
        </AppBar>
    );
}; 