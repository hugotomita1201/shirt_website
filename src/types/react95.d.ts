declare module 'react95' {
    import { ComponentType } from 'react';

    export const Window: ComponentType<unknown>;
    export const WindowContent: ComponentType<unknown>;
    export const WindowHeader: ComponentType<unknown>;
    export const Button: ComponentType<unknown>;
    export const ThemeProvider: ComponentType<unknown>;
    export const styleReset: string;
}

declare module 'react95/dist/themes/original' {
    const original: unknown;
    export default original;
} 