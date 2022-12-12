import styled from "styled-components";

export const ButtonStyle = styled.button`
  outline: 0;
  border: 0;
  margin: 0;
  padding: 5px;
  height: auto;
  line-height: 1;
  cursor: pointer;
  background: none;

  &:disabled {
    opacity: 0.4;
  }
`;
