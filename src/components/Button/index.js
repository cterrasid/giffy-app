import React from "react";
import { StyledLink, StyledButton } from "./styles";

export default function Button({ children, href }) {
  return href ? (
    <StyledLink to={href}>{children}</StyledLink>
  ) : (
    <StyledButton>{children}</StyledButton>
  );
}
