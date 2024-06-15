import styled from "styled-components";

export const Block = styled.div<{ index: number; disabled: boolean }>`
  min-width: 80px;
  min-height: 80px;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${({ disabled }) =>
    disabled
      ? ``
      : `
 background-image: url("/block-terra.jpg");

 
      `};
`;

export const WrapBoxMenu = styled.div`
  border-right: ridge 5px darkgray;
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
export const BoxMenu = styled.div<{ type: number }>`
  width: 45px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  color: white;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  ${({ type }) =>
    type === 0 &&
    `
 background-image: url("/block-terra.jpg");
      `}
`;
export const Menu = styled.div`
  background-color: rgba(0, 0, 0, 0.382);
  width: 500px;
  height: 50px;
  border: ridge 10px grey;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0px);
  display: flex;
`;
