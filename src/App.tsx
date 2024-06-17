import { useState } from "react";
import { Container, Layout } from "./styled";
import {
  BoxMenu,
  BoxMenuInv,
  Menu,
  WrapBoxMenu,
} from "./components/Minecraft/styled";
import { numberOfSequence } from "./components/Minecraft/data/generateBlocks";
import Block from "./components/Minecraft";
import blocks from "./components/Minecraft/data/blocks";
import Inventory from "./components/Inventory";

const numberBlocksConstant = 1000;
const numberBlocks = new Array(numberBlocksConstant).fill(1);
const maxBlockStack = 64;

function App() {
  const [cacheBlocks, setCacheBlocks] = useState<
    { id: number; count: number }[] | []
  >([]);
  const [fillBlocks, setFillBlocks] = useState<number[]>(numberBlocks);

  const [inventory, setInventory] = useState<
    { id: number; type: number; count: number }[]
  >([]);

  const [visibleInventory, setVisibleInventory] = useState(false);

  const createWorld = () => {
    let newFillBlocks: any = {};
    let current = 0;
    for (let index = 0; index < 30; index++) {
      if (current < 5) {
        newFillBlocks[`${index}`] = new Array(numberBlocksConstant).fill(
          numberOfSequence(index)
        );
      } else {
        current = 0;
      }
      current++;
    }

    return newFillBlocks;
  };
  const mapWorld: number[][] = Object.values(createWorld());

  const saveBlock = (id: number) => {
    const getMinedBlocks = fillBlocks.find((_, index) => index === id) ?? -1;
    const findFoundBlockInInv = inventory.find(
      (block) => getMinedBlocks === block.type
    );

    if (!findFoundBlockInInv) {
      setInventory([...inventory, { id, count: 1, type: getMinedBlocks }]);
    } else {
      setInventory((inv) =>
        inv.map((block) =>
          block.type === getMinedBlocks
            ? {
                ...block,
                id: id,
                type: getMinedBlocks ?? -1,
                count: block.count + 1,
              }
            : block
        )
      );
    }
  };

  const mineBlock = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.stopPropagation();
    saveBlock(index);
    const cache = cacheBlocks.filter((element) => element.id === index);

    if (cache.length === 0) {
      setCacheBlocks([...cacheBlocks, { id: index, count: 1 }]);
    } else {
      setCacheBlocks((prevCacheBlocks) =>
        prevCacheBlocks.map((block) =>
          block.id === index ? { ...block, count: block.count + 1 } : block
        )
      );

      const findOfIndex = mapWorld[cache[0].count][index];
      const mapNumberBlocks = fillBlocks.map((block, i) => {
        return i === index ? findOfIndex : block;
      });
      setFillBlocks(mapNumberBlocks);
    }
  };

  const addBlock = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.stopPropagation();
    const mapNumberBlocks = fillBlocks.map((block, i) =>
      index !== i ? block : 1
    );
    setFillBlocks(mapNumberBlocks);
  };

  const findIcoWithIndex = (id: number) => {
    const foundIco = blocks.filter((block) => block.id === id);
    return foundIco[0];
  };

  const openInventory = () => {
    setVisibleInventory(true);
  };
  const closeInventory = () => {
    setVisibleInventory(false);
  };
  return (
    <>
      <Layout layer={3}>
        {visibleInventory && <Inventory closeAction={closeInventory} />}
        {fillBlocks?.map((element, index) => (
          <Container onClick={(e) => mineBlock(e, index)}>
            <Block index={index} icoUrl={findIcoWithIndex(element).ico} />
          </Container>
        ))}
        <Menu>
          <BoxMenuInv onClick={openInventory}>...</BoxMenuInv>

          {inventory.map((space) => (
            <WrapBoxMenu>
              <BoxMenu
                icoUrl={
                  findIcoWithIndex(space.type).inventoryIco ??
                  findIcoWithIndex(space.type).ico
                }
              >
                {space.count}
              </BoxMenu>
            </WrapBoxMenu>
          ))}
        </Menu>
      </Layout>
    </>
  );
}

export default App;
