import styled from "styled-components";

export const SButton = styled.button.attrs(props => ({ ...props }))`
padding: 10px 20px;
color: white;
background-color: #0089FA;
border-radius: 5px;
font-size: 15px;
text-transform: uppercase;
border: none;
font-weight: bold;
transition: all 0.2s ease;

&:hover {
  cursor: pointer;
  transform: scale(1.05);
}
&:disabled {
  background-color: rgba(0, 0, 0, 0.2);
  transition: none;
}
&:disabled:hover {
  cursor: not-allowed;
  transform: scale(1);
}
`;
