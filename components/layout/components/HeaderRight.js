import styled from 'styled-components';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {App} from '../Layout';
import {useContext} from 'react';


export const HeaderRight = () => {
  const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrapper>
    
      <ThemeToggle>
      {ThemeToggler.theme === 'light' ? <DarkModeIcon /> : <Brightness7Icon />}
      </ThemeToggle>
   
    </HeaderRightWrapper>
  )
}


const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height: 60%;
`;

const ThemeToggle = styled.div`
  background-color: ${(props)=> props.theme.bgDiv};
  height: 100%;
  padding: 5px;
  width: 45px;
  border-radius: 12px;
  cursor: pointer;
 
`;
