import styled from "styled-components";
import { themes } from "../../themes/themes";

export const SRecentTsx = styled.div.attrs(props => ({ ...props }))`
display: flex;
flex-direction: column;

width: 100%;
max-width: 100%;

padding: 20px;
border-radius: ${themes.primary.borderRadius};
background-color: rgba(0, 128, 0, 0.35);
`;
