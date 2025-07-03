'use client';

// Custom Windows 95 taskbar style
const AppBar = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '28px',
        backgroundColor: '#c0c0c0',
        border: '1px solid #c0c0c0',
        borderTop: '1px solid #dfdfdf',
        zIndex: 1000,
        ...style
    }}>
        {children}
    </div>
);

const Toolbar = ({ children }: { children: React.ReactNode }) => (
    <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px'
    }}>
        {children}
    </div>
);

export const Footer = () => {
    return (
        <AppBar>
            <Toolbar>
                <p style={{
                    flexGrow: 1,
                    fontSize: '11px',
                    fontFamily: 'MS Sans Serif, sans-serif'
                }}>
                    &copy; {new Date().getFullYear()} Vintage Shirt Store
                </p>
            </Toolbar>
        </AppBar>
    );
}; 