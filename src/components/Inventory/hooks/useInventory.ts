import { useState } from "react";
import { CrafterType, CraftType } from "../types";

const useInventory = () => {
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

  const handleUpdateCraft = (index: number, newValues: CraftType) => {
    setCraft((prevCraft) => {
      const updatedCraft = [...prevCraft];
      const updatedObject = { ...updatedCraft[index], ...newValues };
      updatedCraft[index] = updatedObject;
      return updatedCraft;
    });
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
  };
};

export default useInventory;
