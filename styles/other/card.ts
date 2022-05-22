import styled from "styled-components";
import { themes } from "./../../themes/themes";

export const SCard = styled.div.attrs(props => ({
  ...props 
}))`
display: flex;
flex-direction: column;
align-items: center;
border-radius: ${themes.primary.borderRadius};
padding: 25px;
-webkit-box-shadow: ${themes.primary.boxShadow}; 
box-shadow: ${themes.primary.boxShadow};
`;
