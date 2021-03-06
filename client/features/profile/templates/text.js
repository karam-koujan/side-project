import styled from "styled-components";


export const UserName = styled.span`
 color:${props=>props.theme.third};
 font-size:1.5rem;
 display:block;
 margin:1rem auto .2rem auto;
 width:fit-content;
`

export const ReviewTitle = styled.span`
 color:${props=>props.theme.primary};
 display:block;
 margin:2rem 0 0 1rem;
 text-transform:uppercase;
`

export const ReviewerName = styled.span`
 color:${props=>props.theme.primary};
`

export const ReviewerText = styled.p`
  color:${props=>props.theme.third};
  font-size:.9rem;
  margin:.5rem 0 0 3rem;
`
export const NoReviews = styled.p`
  color:${props=>props.theme.third};
  padding:2rem 0;
  margin:0 auto;
  width:fit-content;
`
export const ReviewersNum = styled.a`
color:${props=>props.theme.third};
display:block;
margin:.5rem auto;
text-decoration:none;
transition:text-decoration .2s ease-in-out;
width:fit-content;
&:hover,&:focus{
  text-decoration:underline;
}
`
export const ErrorMsg= styled.span`
 color:red;  
 margin:.5rem 0;
 font-size:.8rem;
`