'use client';

import StyledComponentsRegistry from '@/lib/StyleRegistry';
import {
  createGlobalStyle,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';

// Custom Windows 95 style reset
const customStyleReset = `
  * {
    box-sizing: border-box;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    border: none;
    background: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${customStyleReset}
  body, #__next {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'MS Sans Serif', sans-serif;
    font-size: 11px;
  }
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  body {
    background-color: #008080;
  }
`;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <StyleSheetManager
        shouldForwardProp={(prop) =>
          ![
            'noPadding',
            'fixed',
            'active',
            'fullWidth',
            'primary',
            'square',
            'shadow',
          ].includes(prop)
        }
      >
        <GlobalStyles />
        <ThemeProvider theme={{}}>{children}</ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
} 