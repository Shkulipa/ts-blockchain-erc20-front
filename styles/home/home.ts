import styled from "styled-components";
import { themes } from "../../themes/themes";
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
`;

export const SSideContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: ${themes.primary.gap};
`;

const themeGap = themes.primary.gap.split(/([0-9]+)/).filter(Boolean);;
const gapValue = +themeGap[0];
const gapUnit = themeGap[1];
export const WrapperContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: calc(100vh - ${gapValue * 2}${gapUnit});
gap: ${themes.primary.gap};

@media (max-width: ${size.laptop}) {
  max-width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
`

export const SGetMyBalanceBtn = styled(SButton).attrs(props => ({ ...props }))`
margin-top: 30px;
`