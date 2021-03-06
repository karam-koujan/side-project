import styled from "styled-components";





export const Input = styled.input`
border:2px solid ${props=>props.theme.primary};
border-radius:3px;
color:${props=>props.theme.third};
padding:.5rem;
width:100%;
&:focus{
    border:2px solid ${props=>props.theme.primary};
    outline:none;
}
`


export const TextArea = styled.textarea`
 border:2px solid ${props=>props.theme.primary};
 border-radius:3px;
 color:${props=>props.theme.third};
 padding:.5rem;
 resize:none;
 height:100px;
 width:100%;

 &:focus{
     border:2px solid ${props=>props.theme.primary};
     outline:none;
 }
`
export const Button = styled.button`
  background-color:${props=>props.theme.primary};
  border-radius:2px;
  color:white;
  display:block;
  letter-spacing:2px;
  margin:.5rem auto 0 auto;
  opacity:${({disabled})=>!disabled?1:0.8};
  padding:.5rem 1rem;
  text-transform :uppercase;

  &:hover,&:focus{
      z-index:1;
      opacity:.0rem;
  }
`
export const UploadImgBtn = styled.button`
  background-color:${props=>props.theme.secondary}; 
  border-radius:1000px;
  color:${props=>props.theme.third};
  letter-spacing:1px;
  padding:.8rem 1rem;
  position:relative;
  text-transform:uppercase;
  top:0%;
  &>span,&>input{
    cursor:pointer;
  }
`
export const UpdateProfileImgBtn = styled.button`
  color:${props=>props.theme.third};
  display:block;
  font-size:1rem;
  font-weight:700;
  & span{
  }
`