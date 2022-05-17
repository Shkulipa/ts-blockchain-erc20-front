import styled from "styled-components";

const padding = "10px";

export const STable = styled.div.attrs(props => ({
  ...props 
}))`
width: 100%;
margin-top: 25px;
`;

export const STR = styled.div.attrs(props => ({
  ...props 
}))`
width: 100%;
display: flex;
`;

export const STH = styled.div.attrs(props => ({
  ...props 
}))`
width: 100%;
padding: ${padding};
background-color: rgba(0, 0, 0, 0.04);
`;

export const STD = styled.div.attrs(props => ({
  ...props 
}))`
width: 100%;
padding: ${padding};
`;
