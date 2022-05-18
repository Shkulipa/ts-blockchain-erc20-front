import styled from "styled-components";
import { themes } from "./../../themes/themes";
import { size } from "./../../utils/breakpoints";

interface ICardProps { 
  removeMargin?: boolean;
  marginLaptop?: boolean;
};

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
margin-bottom: ${(props: ICardProps) => props.removeMargin ? "0" : "30px"};

@media (max-width: ${size.laptop}) {
  margin-bottom: ${(props: ICardProps) => props.removeMargin ? "0" : "30px"};
  ${((props: ICardProps) => props.marginLaptop && "margin-bottom: 30px")};
}
`;
