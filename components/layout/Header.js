
import styled from 'styled-components';
import {HeaderLogo} from './components/HeaderLogo.js';
import {HeaderNav} from './components/HeaderNav.js';
import {HeaderRight} from './components/HeaderRight.js';
export const Header = () => {
  return (
    <HeaderWrapper>
    <HeaderLogo />
    <HeaderNav />
    <HeaderRight />
    </HeaderWrapper>
  )
}

const  HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
`;
// const HeaderWrapper = styled.div`
//   width: 100%;
//   height: 70px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
