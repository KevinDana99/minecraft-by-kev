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
import { findIcoWithIndex } from "./components/Minecraft/utils";

const numberBlocksConstant = 1000;
const numberBlocks = new Array(numberBlocksConstant).fill(1);
const maxBlockStack = 64;

function App() {
  const [cacheBlocks, setCacheBlocks] = useState<
    { id: number; count: number }[] | []
  >([]);
  const [fillBlocks, setFillBlocks] = useState<number[]>([
    999999,
    ...numberBlocks,
  ]);

  const [inventory, setInventory] = useState<
    { id: number; type: number; count: number }[]
  >([]);

  const [visibleInventory, setVisibleInventory] = useState(false);

  const [selectedBlock, setSelectedBlock] = useState<{
    id: number;
    type: number;
    count: number;
  } | null>(null);

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

  const openInventory = () => {
    setVisibleInventory(true);
  };
  const closeInventory = () => {
    setVisibleInventory(false);
  };

  const selectCurrentBlock = (block: {
    id: number;
    type: number;
    count: number;
  }) => {
    setSelectedBlock(block);
  };

  const delayMineBlock = (
    timeOut: number,
    callback: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number
    ) => void
  ) => {
    setTimeout(callback, timeOut);
  };
  return (
    <>
      <Layout layer={3}>
        {visibleInventory && (
          <Inventory
            closeAction={closeInventory}
            selectedBlock={selectedBlock}
          />
        )}
        {fillBlocks?.map((element, index) => (
          <div
            onMouseDown={(e) => {
              mineBlock(e, index);
            }}
          >
            <Block icoUrl={findIcoWithIndex(element).ico} />
          </div>
        ))}
        <Menu>
          <BoxMenuInv onClick={openInventory}>...</BoxMenuInv>

          {inventory.map((space) => (
            <WrapBoxMenu onClick={() => selectCurrentBlock(space)}>
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
