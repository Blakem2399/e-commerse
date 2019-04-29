import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
padding: 0.2rem 0.5rem;
border:0.05rem solid;
border-color:${(props) => props.cart ? "var(--mainYellow)" : props.dark ? "var(--mainTan)" : "var(--lightTan)"};
border-radius: 0.5rem;
color: ${(props) => props.cart ? "var(--mainYellow)" : props.dark ? "var(--mainTan)" : "var(--lightTan)"};
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background:${(props) => props.cart ? "var(--mainYellow)" : props.dark ? "var(--mainTan)" : "var(--lightTan)"};
color:${(props) => props.cart ? "var(--mainDark)" : props.dark ? "var(--lightTan)" : "var(--mainTan)"};
}
&:focus {
outline:none;
}
`;
