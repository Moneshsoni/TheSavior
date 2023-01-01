import styled from 'styled-components';
export const HeaderNav = () => {
  return (
    <HeaderWrapper>
      <HeaderNavLinks>
        Campaigns
      </HeaderNavLinks>
      
      <HeaderNavLinks>
        Create Campaign
      </HeaderNavLinks>
      
      <HeaderNavLinks>
        Dashboard
      </HeaderNavLinks>
    </HeaderWrapper>
   
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props)=> props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
`
const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props=> props.theme.bgSubDiv)};
  font-family: Roboto;
  margin: 7px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`;
