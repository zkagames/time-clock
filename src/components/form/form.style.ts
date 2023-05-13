import styled from "styled-components";

export const FormContainer = styled.div`
    disaply:flex;
    margin-bottom: 32px;
    width:fit-content;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    background: #fafafa;
    .MuiFormControl-root{background: white;}
`

export const FormRow = styled.div`
    display:grid;
    align-items: center;
    grid-template-columns: 70px 190px auto;
    margin:16px 0px;
`

export const InputSmall = styled.input.attrs({placeholder: 'hh:mm'})`
   width: 50px;
`