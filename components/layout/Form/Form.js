import styled from 'styled-components';
import  {FormLeftWrapper} from './components/FormLeftWrapper';
import  {FormRightWraper} from './components/FormRightWraper';
import  {createContext,useState}   from 'react';
// import useState from 'react';


export const Form = () => {
  
  return (
    // <FormState.Provider value={{form, setForm,image, setImage, ImageHandler,FormHandler}}>
    <FormWrapper>
        <FormMain>
            <FormInputWrapper>
                <FormLeftWrapper />
                <FormRightWraper />
            </FormInputWrapper>
        </FormMain>
    </FormWrapper>
    // </FormState.Provider>
  )
}

const FormWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`;

const FormMain = styled.div`
    width: 80%;
`
const FormInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    
`

// export default Form;
// export {FormState};
