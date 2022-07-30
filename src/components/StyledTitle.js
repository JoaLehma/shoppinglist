import styled from "styled-components";

const StyledTitle = styled.div`
  background-color: var(--primary-color);
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;

  & h1 {
    color: var(--primary-contrast-color);
  }
`;

export default StyledTitle;
