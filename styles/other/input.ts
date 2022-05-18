import styled from "styled-components";
import { themes } from "./../../themes/themes";

export const SInput = styled.input.attrs(props => ({
  ...props 
}))`
width: 100%;
max-width: 100%;
padding: 10px;
border: 1px solid #CACCCB;
border-radius: ${themes.primary.borderRadius};
margin: ${(props: { margin?: string }) => props.margin || "0 0 35px 0"};

&::-webkit-inner-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
}

&:focus {
  outline: none;
}
`;
