import styled from "styled-components";
import { themes } from "./../../themes/themes";

export const SCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: ${themes.primary.borderRadius};
padding: 25px;
-webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.22); 
box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.22);
margin-top: 30px;
`;