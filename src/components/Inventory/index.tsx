import React from "react";
import {
  BoxCraft,
  BoxSkin,
  BoxSpaces,
  CloseButton,
  Container,
  Craft,
  CraftDivider,
  CraftResult,
  Skin,
  Space,
  Wrapper,
} from "./styled";

const Inventory = ({ closeAction }: { closeAction: () => void }) => {
  return (
    <Container>
      <CloseButton onClick={closeAction}>X</CloseButton>
      <Wrapper>
        <BoxCraft>
          <BoxSkin>
            <div>
              <Space />
              <Space />
              <Space />
              <Space />
            </div>
            <Skin></Skin>
          </BoxSkin>
          <CraftDivider>
            <Craft>
              <Space />
              <Space />
              <Space />
              <Space />
            </Craft>
            <CraftResult>
              <Space />
            </CraftResult>
          </CraftDivider>
        </BoxCraft>
        <BoxSpaces>
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
        </BoxSpaces>
        <BoxSpaces>
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
        </BoxSpaces>
      </Wrapper>
    </Container>
  );
};

export default Inventory;
