export type InventoryType = {
  closeAction: () => void;
  selectedBlock: {
    id: number;
    type: number;
    count: number;
  } | null;
};

export type CraftType = {
  id: number;
  name: string | null;
  healt: number | null;
  ico: string | null;
  inventoryIco: null | string;
  craft: null | number[] | number[][];
  count: number;
  initialCraftCount?: number | undefined;
};
export type CrafterType = CraftType[];
