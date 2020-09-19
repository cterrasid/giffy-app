import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

export const StyledLink = styled(LinkWouter)`
  background-color: var(--black-transparency);
  border-radius: 5px;
  border: none;
  color: var(--white);
  cursor: pointer;
  height: 30px;
  width: 70px;

  :hover {
    background-color: var(--black-transparency);
    font-weight: bold;
  }
`;

export const StyledButton = StyledLink.withComponent("button");
