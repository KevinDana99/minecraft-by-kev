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
import blocks from "../Minecraft/data/blocks";
import { findIcoWithIndex } from "../Minecraft/utils";
import { BoxMenu } from "../Minecraft/styled";
import { InventoryType } from "./types";
import useInventory from "./hooks/useInventory";

const Inventory = ({ closeAction, selectedBlock }: InventoryType) => {
  const { cacheInv, craft, handleUpdateCraft, handleSavedBlock } =
    useInventory();

  const findResultCraft = () => {
    const findCraftInBlocks = blocks.filter(
      (block) => selectedBlock && block.craft?.includes(selectedBlock?.type)
    );
    const findCraft = craft.find((block) => block.count !== 0);
    const match = findCraft?.count === findCraftInBlocks[0]?.craft?.length;
    return match ? findCraftInBlocks[0] : null;
  };

  const onCraft = (idCraft: number) => {
    const canCraft = blocks.find(
      (block) =>
        block.id === selectedBlock?.type &&
        block.craft &&
        block.craft?.length > 0
    );

    canCraft && handleUpdateCraft(idCraft, { ...canCraft, count: 1 });
  };

  const resultCraft = findResultCraft();

  return (
    <Container>
      <CloseButton onClick={closeAction}>X</CloseButton>
      <Wrapper>
        <BoxCraft>
          <BoxSkin>
            <div>
              <Space></Space>
              <Space />
              <Space />
              <Space />
            </div>
            <Skin></Skin>
          </BoxSkin>
          <CraftDivider>
            <Craft>
              {craft.map((block, index) => (
                <Space onClick={() => onCraft(index)}>
                  <BoxMenu
                    icoUrl={
                      findIcoWithIndex(craft[index]?.id)?.inventoryIco ??
                      findIcoWithIndex(craft[index]?.id)?.ico
                    }
                  >
                    {block.count ? block.count : null}
                  </BoxMenu>
                </Space>
              ))}
            </Craft>
            <CraftResult>
              <Space
                onClick={(e) => {
                  handleSavedBlock(
                    resultCraft,
                    resultCraft?.initialCraftCount ?? 0
                  );
                }}
              >
                <BoxMenu icoUrl={resultCraft?.inventoryIco ?? resultCraft?.ico}>
                  {resultCraft?.initialCraftCount
                    ? resultCraft?.initialCraftCount
                    : null}
                </BoxMenu>
              </Space>
            </CraftResult>
          </CraftDivider>
        </BoxCraft>
        <BoxSpaces>
          {cacheInv.map((_, index) => (
            <Space>
              <BoxMenu
                icoUrl={
                  cacheInv[index]?.inventoryIco ??
                  cacheInv[index]?.ico ??
                  undefined
                }
              >
                {cacheInv[index].count !== 0 ? cacheInv[index]?.count : null}
              </BoxMenu>
            </Space>
          ))}

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
