import blocks from "./data/blocks";

export const findIcoWithIndex = (id: number) => {
  const foundIco = blocks.filter((block) => block.id === id);

  return foundIco[0];
};
