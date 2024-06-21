import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 650px;
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  background-color: gray;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
`;
export const BoxSpaces = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const BoxSkin = styled.div`
  display: flex;
`;

export const Skin = styled.div`
  margin-right: 2px;
  box-sizing: border-box;
  background-color: black;
  width: 150px;
  height: 235px;
  background-image: url("/steve.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
`;

export const BoxCraft = styled.div`
  margin-top: 50px;
  height: 250px;
  display: flex;
  justify-content: space-between;
`;

export const CraftDivider = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Craft = styled.div`
  width: 150px;
  height: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CraftResult = styled.div`
  width: 80px;
  height: 120px;
`;
export const Space = styled.div`
  width: 50px;
  height: 50px;
  background-color: #747474;
  border: ridge 5px #989898;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  padding: 10px;
  width: 40px;
  height: 40px;
  background-color: #9c9b9b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
`;
