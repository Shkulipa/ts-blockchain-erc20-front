import styled from "styled-components";
import { SButton } from "../other/button";

export const SMain = styled.main`
width: 100%;
`;

export const SContainer = styled.div`
width: 100%;
max-width: 1170px;
padding: 0 15px;
margin: 0 auto;
`

export const SideContainer = styled.div`
width: 100%;
max-width: 49%;
`

export const WrapperContent = styled.div`
display: flex;
justify-content: space-between;
`

export const SGetMyBalanceBtn = styled(SButton).attrs(props => ({ ...props }))`
margin-top: 30px;
`