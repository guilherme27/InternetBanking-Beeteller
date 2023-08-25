import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme?: DefaultTheme }>`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800&display=swap');
    
    html, body {
        font-family: 'Open Sans', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 500;
        padding: 0;
        margin: 0;
        border: 0;
        vertical-align: baseline;
        overflow: hidden;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    button { 
        font-family: 'Open Sans', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
        font-weight: 500;
    }
`;
