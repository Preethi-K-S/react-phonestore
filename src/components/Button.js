import styled from "styled-components";
export const ButtonContainer =styled.button`
text-transform: Capitalize;
font-size:1.5rem;
font-weight:bold;
background:transparent;
border:0.05rem solid rgb(163, 163, 248);
border-color:${props =>props.cart?" rgb(252, 182, 5)":"rgb(163, 163, 248)"};
color:${prop =>prop.cart?" rgb(252, 182, 5)":"rgb(163, 163, 248)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop =>prop.cart?" rgb(252, 182, 5)":"rgb(163, 163, 248)"};
    color:rgb(107, 98, 241);
}
&:focus{
    outline:none;
}
`; 
