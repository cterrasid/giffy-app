import styled from "@emotion/styled";
import { breakpoints } from "styles";

export const StyledHomeContent = styled.div`
  ${breakpoints.laptop} {
    display: flex;
    flex-direction: row;

    section:last-of-type {
      width: 40%;
    }
  }
`;
