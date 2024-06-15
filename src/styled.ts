import styled from "styled-components";

export const Layout = styled.div<{ position?: string; layer?: number }>`
  width: 100%;
  height: 2000px;
  background-color: lightblue;
  z-index: ${({ layer }) => layer && layer};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
`;

export const Container = styled.div`
  width: 80px;
  height: 80px;
`;
