import React from "react";

import { ChildrenProps } from "../../domain/children-props.interface";
import { TitleStyled } from "./Title.styled";

export const Title: React.FC<ChildrenProps> = ({ children }) => {
  return <TitleStyled.TitleWrapper>{children}</TitleStyled.TitleWrapper>;
};
