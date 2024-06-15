import React from "react";
import { Block } from "./styled";

const Minecraft = ({
  index,
  disabled,
}: {
  index: number;
  disabled: boolean;
}) => {
  return <Block disabled={disabled} index={index}></Block>;
};

export default Minecraft;
