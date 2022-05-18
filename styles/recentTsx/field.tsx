import styled from "styled-components";
import { themes } from "../../themes/themes";

export const SField = styled.p.attrs(props => ({ ...props }))`
margin: ${(props: { margin?: string }) => props.margin || "0 0 15px 0"};;
`;
