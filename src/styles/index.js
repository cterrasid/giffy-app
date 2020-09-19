import styled from "@emotion/styled";

export const breakpoints = {
  tablet: "@media screen and (min-width: 768px)",
  laptop: "@media screen and (min-width: 1024px)",
};

export const Title = styled.hgroup`
  h1 {
    font-size: 24px;
    text-align: center;
  }

  :not(h1) {
    font-size: 18px !important;
    font-weight: bold;
    text-align: start;
  }
`;
