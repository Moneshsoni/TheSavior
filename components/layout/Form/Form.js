import styled from 'styled-components';
import  FormLeftWrapper  from './components/FormLeftWrapper';
import  FormRightWraper from './components/FormRightWraper';
import { createContext,useState } from 'react';

const FormState = createContext();
export const Form = () => {
  
  const [form, setForm] = useState({
    campaignTitle: "",
    story: "",
    requiredAmount: "",
    category: "",
  });
  
  const FormHandler = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}
  
  const [image, setImage] = useState(null);
  
  const ImageHandler = (e) => {
    setImage(e.target.files[0]);
  }
  
  return (
    <FormState.Provider value={{form, setForm,image, setImage, ImageHandler,FormHandler}}>
    <FormWrapper>
        <FormMain>
            <FormInputWrapper>
                <FormLeftWrapper />
                <FormRightWraper />
            </FormInputWrapper>
        </FormMain>
    </FormWrapper>
    </FormState.Provider>
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

// const FormTitle = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     color: ${(props)=> props.theme.color};
//     font-size: 40px;
//     font-family: popins;
//     margin-top: 20px;
// `
const FormInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    
`
export  {FormState};
