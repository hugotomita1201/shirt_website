'use client';

import StyledComponentsRegistry from '@/lib/StyleRegistry';
import {
  createGlobalStyle,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';

import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body, #__next {
    height: 100vh;
    display: flex;
    flex-direction: column;
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
        <ThemeProvider theme={original}>{children}</ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
} 