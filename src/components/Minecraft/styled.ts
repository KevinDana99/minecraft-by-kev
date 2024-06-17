import styled from "styled-components";

export const Container = styled.div<{
  index: number;
  icoUrl: string;
}>`
  min-width: 80px;
  min-height: 80px;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ icoUrl }) => icoUrl && `url(${icoUrl})`};
`;

export const WrapBoxMenu = styled.div`
  border-right: ridge 5px darkgray;
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
export const BoxMenu = styled.div<{ icoUrl?: string }>`
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
  background-image: ${({ icoUrl }) => icoUrl && `url(${icoUrl})`};
  cursor: pointer;
`;
export const BoxMenuInv = styled.div<{ icoUrl?: string }>`
  width: 60px;
  height: 50px;
  border-right: ridge 5px darkgray;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #515151;
  color: white;
  font-size: 2rem;
  cursor: pointer;
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
