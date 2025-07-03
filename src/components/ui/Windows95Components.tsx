import React from 'react';

// Windows 95 styled Window component
export const Window = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
        backgroundColor: '#c0c0c0',
        border: '2px outset #c0c0c0',
        borderRadius: '0',
        fontFamily: 'MS Sans Serif, sans-serif',
        fontSize: '11px',
        ...style
    }}>
        {children}
    </div>
);

// Windows 95 styled Window Header
export const WindowHeader = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
        backgroundColor: '#000080',
        color: 'white',
        padding: '2px 4px',
        fontWeight: 'bold',
        fontSize: '11px',
        fontFamily: 'MS Sans Serif, sans-serif',
        display: 'flex',
        alignItems: 'center',
        ...style
    }}>
        {children}
    </div>
);

// Windows 95 styled Window Content
export const WindowContent = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
        padding: '8px',
        backgroundColor: '#c0c0c0',
        ...style
    }}>
        {children}
    </div>
);

// Windows 95 styled Button
export const Button = ({ children, onClick, style, ...props }: {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
    [key: string]: unknown;
}) => (
    <button
        onClick={onClick}
        style={{
            backgroundColor: '#c0c0c0',
            border: '2px outset #c0c0c0',
            padding: '2px 8px',
            fontFamily: 'MS Sans Serif, sans-serif',
            fontSize: '11px',
            cursor: 'pointer',
            ...style
        }}
        {...props}
    >
        {children}
    </button>
);

// GroupBox component
export const GroupBox = ({ label, children, style }: { label?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
    <fieldset style={{
        border: '2px inset #c0c0c0',
        margin: '0.5rem 0',
        padding: '0.5rem',
        backgroundColor: '#c0c0c0',
        ...style
    }}>
        {label && (
            <legend style={{
                backgroundColor: '#c0c0c0',
                padding: '0 0.5rem',
                fontSize: '11px',
                fontWeight: 'normal',
                fontFamily: 'MS Sans Serif, sans-serif'
            }}>{label}</legend>
        )}
        {children}
    </fieldset>
);

// Separator component
export const Separator = ({ style }: { style?: React.CSSProperties }) => (
    <hr style={{
        border: 'none',
        borderTop: '1px solid #808080',
        borderBottom: '1px solid #ffffff',
        height: '2px',
        margin: '0.5rem 0',
        ...style
    }} />
); 