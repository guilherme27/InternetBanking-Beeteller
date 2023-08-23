import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme?: DefaultTheme }>`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
    
    head, body{
        font-family: 'Open Sans', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        font-size: 16px;
        padding: 0;
        margin: 0;
        border: 0;
        vertical-align: baseline;
        overflow: hidden;
    }
`;
