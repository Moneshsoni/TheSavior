import {Header} from './Header.js';
import {themes} from './themes.js';

import {ThemeProvider , createGlobalStyle} from 'styled-components';
import {useState , createContext} from 'react';
export const Layout = ({children})=>{
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeProvider theme = {themes[theme]}>
    
    </ThemeProvider>
  )
}
