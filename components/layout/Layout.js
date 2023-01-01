import {Header} from './Header.js';
import themes from "./themes.js";

import styled,{ThemeProvider , createGlobalStyle} from 'styled-components';
import {useState , createContext} from 'react';
export const Layout = ({children})=>{
  const [theme, setTheme] = useState("light");
  
  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  
  return (
    <ThemeProvider theme={themes[theme]}>
    <LayoutWrapper onClick={changeTheme}>
    <Header/>
    <GlobalStyle />
    {children}
    </LayoutWrapper>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
`;
