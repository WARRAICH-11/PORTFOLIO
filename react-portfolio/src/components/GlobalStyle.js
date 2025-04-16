import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    overflow-x: hidden;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }

  p {
    line-height: 1.7;
    font-size: 1rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: ${props => props.theme.transition};
  }

  button, input, textarea {
    font-family: inherit;
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.dark};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

export default GlobalStyle; 