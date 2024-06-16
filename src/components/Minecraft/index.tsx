import React from "react";
import { Container } from "./styled";

const Block = (props: { index: number; icoUrl: string }) => {
  return <Container {...props}></Container>;
};

export default Block;
