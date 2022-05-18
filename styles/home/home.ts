import styled from "styled-components";
import { SButton } from "../other/button";
import { size } from "./../../utils/breakpoints"

export const SMain = styled.main`
width: 100%;
position: relative;
`;

export const SContainer = styled.div`
width: 100%;
max-width: 1170px;
padding: 15px;
margin: 0 auto;
`

export const SideContainer = styled.div`
width: 100%;
max-width: 49%;

@media (max-width: ${size.laptop}) {
  max-width: 100%;
}
`

export const WrapperContent = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: ${size.laptop}) {
  max-width: 100%;
  flex-direction: column;
}
`

export const SGetMyBalanceBtn = styled(SButton).attrs(props => ({ ...props }))`
margin-top: 30px;
`