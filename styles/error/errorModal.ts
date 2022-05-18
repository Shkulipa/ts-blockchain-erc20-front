import { themes } from './../../themes/themes';
import styled from "styled-components";

export const SErrorModal = styled.div.attrs(props => ({ ...props }))`
position: absolute;
padding: 20px;

background-color: rgba(255, 0, 0, 0.35);
border-radius: ${themes.primary.borderRadius};

bottom: 15px;
right: 20px;
`;
