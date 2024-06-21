const blocks = [
  {
    id: 0,
    name: "void",
    healt: 100,
    ico: "",
    inventoryIco: null,
    craft: null,
  },
  {
    id: 1,
    name: "grass",
    healt: 100,
    ico: "/block-grass-base.jpg",
    inventoryIco: "block-grass.jpg",
    craft: [1, 2, 3],
  },
  {
    id: 2,
    name: "ground",
    healt: 100,
    ico: "/block-ground-base.jpg",
    inventoryIco: null,
    craft: [1, 2],
  },

  {
    id: 3,
    name: "stone base",
    healt: 100,
    ico: "/block-stone-base.jpg",
    inventoryIco: null,
    craft: null,
  },

  {
    id: 4,
    name: "gold",
    healt: 100,
    ico: "",
    inventoryIco: null,
    craft: null,
  },
  { id: 5, name: "iron", healt: 100, ico: "", inventoryIco: null, craft: null },

  { id: 6, name: "sand", healt: 100, ico: "", inventoryIco: null, craft: null },

  {
    id: 7,
    name: "redstone",
    healt: 100,
    ico: "",
    inventoryIco: null,
    craft: null,
  },
  {
    id: 999999,
    name: "wood-base",
    healt: 100,
    ico: "/block-wood-base.jpg",
    inventoryIco: "/block-wood-base.png",
    craft: [1],
  },
  {
    id: 1000000,
    name: "wood-block",
    healt: 100,
    ico: "/block-wood-work.webp",
    inventoryIco: "/block-wood-work.webp",
    craft: [999999],
    initialCraftCount: 4,
  },
  {
    id: 1000001,
    name: "wooden stick",
    healt: 100,
    ico: "",
    inventoryIco: null,
    craft: null,
  },
  {
    id: 1999999,
    name: "stone",
    healt: 100,
    ico: "",
    inventoryIco: null,
    craft: null,
  },
];

export default blocks;
