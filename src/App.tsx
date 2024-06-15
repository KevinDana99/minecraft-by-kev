import { useEffect, useState } from "react";
import Minecraft from "./components/Minecraft";
import { Container, Layout } from "./styled";
import { BoxMenu, Menu, WrapBoxMenu } from "./components/Minecraft/styled";
import { numberOfSequence } from "./components/Minecraft/Block/generateBlocks";

const numberBlocksConstant = 1000;
const numberBlocks = new Array(numberBlocksConstant).fill(1);
const maxBlockStack = 64;

function App() {
  const [fillBlocks, setFillBlocks] = useState(numberBlocks);

  const [inventary, setInventary] = useState<{
    space: null | { blocks: number[]; count: number };
    space2?: null | { blocks: number[]; count: number };
    space3?: null | { blocks: number[]; count: number };
    space4?: null | { blocks: number[]; count: number };
    space5?: null | { blocks: number[]; count: number };
    space6?: null | { blocks: number[]; count: number };
    space7?: null | { blocks: number[]; count: number };
  }>({
    space: null,
  });

  const createWorld = () => {
    let newFillBlocks: any = {};
    let current = 0;
    for (let index = 0; index < 30; index++) {
      if (current < 5) {
        newFillBlocks[`layer${index}`] = new Array(numberBlocksConstant).fill(
          numberOfSequence(index)
        );
      } else {
        current = 0;
      }
      current++;
    }
  };

  const savedMinedBlocks = () => {
    const filterGetBlocks = fillBlocks.filter((block) => block === 0);
    const numberOfBlocks = inventary?.space?.blocks?.length ?? -1;
    if (numberOfBlocks <= maxBlockStack) {
      setInventary({
        ...inventary,
        space: { blocks: filterGetBlocks, count: numberOfBlocks },
      });
    }
  };

  const mineBlock = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.stopPropagation();
    const mapNumberBlocks = fillBlocks.map((block, i) =>
      index === i ? 0 : block
    );

    setFillBlocks(mapNumberBlocks);
    savedMinedBlocks();
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

  useEffect(() => {
    createWorld();
  }, []);
  return (
    <>
      <Layout layer={3}>
        {fillBlocks?.map((element, index) =>
          element === 1 ? (
            <Container onClick={(e) => mineBlock(e, index)}>
              <Minecraft index={index} disabled={false} />
            </Container>
          ) : (
            <Container onClick={(e) => addBlock(e, index)}>
              <Minecraft index={index} disabled={true} />
            </Container>
          )
        )}
        <Menu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space?.blocks?.[0] ?? -1}>
              {inventary?.space?.count}
            </BoxMenu>
          </WrapBoxMenu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space2?.blocks?.[0] ?? -1}>
              {inventary?.space2?.count}
            </BoxMenu>
          </WrapBoxMenu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space3?.blocks?.[0] ?? -1}>
              {inventary?.space3?.count}
            </BoxMenu>
          </WrapBoxMenu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space4?.blocks?.[0] ?? -1}>
              {inventary?.space4?.count}
            </BoxMenu>
          </WrapBoxMenu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space5?.blocks?.[0] ?? -1}>
              {inventary?.space5?.count}
            </BoxMenu>
          </WrapBoxMenu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space6?.blocks?.[0] ?? -1}>
              {inventary?.space6?.count}
            </BoxMenu>
          </WrapBoxMenu>
          <WrapBoxMenu>
            <BoxMenu type={inventary?.space7?.blocks?.[0] ?? -1}>
              {inventary?.space7?.count}
            </BoxMenu>
          </WrapBoxMenu>
        </Menu>
      </Layout>
    </>
  );
}

export default App;
