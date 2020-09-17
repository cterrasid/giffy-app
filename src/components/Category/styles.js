import styled from "@emotion/styled";
import { Link } from "wouter";

const generateMulticolorCategory = (props) => {
  const colorIndex = (props.index % 4) + 1;

  const hover = (index) => {
    return `
          :hover {
              color: var(--white);
              background: var(--color_${index});
          }`;
  };

  const background = `background: var(--color_${colorIndex}-light)`;

  return `${background};${hover(colorIndex)}`;
};

export const CategoryItem = styled.li`
  font-size: 1.2rem;
  margin: 2px;
  padding: 0.3rem;

  ${generateMulticolorCategory}
`;

export const CategoryLink = styled(Link)`
  transition: color ease-in 0.1s;
`;
