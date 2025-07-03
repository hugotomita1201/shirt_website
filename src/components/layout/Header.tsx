'use client';

import Link from 'next/link';
import { Cart } from './Cart';

// Custom Windows 95 AppBar and Toolbar components
const AppBar = ({ children }: { children: React.ReactNode }) => (
    <div style={{
        backgroundColor: '#c0c0c0',
        border: '1px solid #c0c0c0',
        borderBottom: '1px solid #808080',
        height: '32px'
    }}>
        {children}
    </div>
);

const Toolbar = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...style
    }}>
        {children}
    </div>
);

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