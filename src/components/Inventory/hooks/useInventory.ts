import { useState } from "react";
import { CrafterType, CraftType } from "../types";
import blocks from "../../Minecraft/data/blocks";

const useInventory = (
  selectedBlock: {
    id: number;
    type: number;
    count: number;
  } | null
) => {
  const craftInitialState = {
    id: -1,
    name: null,
    healt: null,
    ico: null,
    inventoryIco: null,
    craft: [-1],
    count: 0,
    initialCraftCount: 0,
  };
  const [craft, setCraft] = useState<CrafterType>(
    new Array(4).fill(craftInitialState)
  );
  const [cacheInv, setCacheInv] = useState<CrafterType>(
    new Array(12).fill(craftInitialState)
  );

  const handleUpdateCraft = (idCraft: number) => {
    const currentBlock = blocks.filter(
      (block) => block.id === selectedBlock?.type
    );

    const mapCraft = craft.map((el, index) =>
      index === idCraft ? { ...currentBlock[0], count: el.count + 1 } : el
    );
    currentBlock[0]?.craft && setCraft(mapCraft);
  };

  const handleUpdateInv = (index: number, newValues: CraftType) => {
    setCacheInv((prevInv) => {
      const updatedInv = [...prevInv];
      const updatedObject = { ...updatedInv[index], ...newValues };
      updatedInv[index] = updatedObject;
      return updatedInv;
    });
  };
  const handleSavedBlock = (
    craftedBlock: Omit<CraftType, "count"> | null,
    count: number
  ) => {
    craftedBlock &&
      handleUpdateInv(0, {
        ...craftedBlock,
        count: cacheInv[0].count + count,
      });
  };
  return {
    craft,
    cacheInv,
    craftInitialState,
    handleUpdateCraft,
    handleUpdateInv,
    handleSavedBlock,
    setCraft,
  };
};

export default useInventory;
