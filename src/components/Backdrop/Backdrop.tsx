import React from "react";

import { ChildrenProps } from "../../domain/children-props.interface";
import { BackdropStyled } from "./Backdrop.styled";

export const Backdrop: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <BackdropStyled.BackdropWrapper>
      <BackdropStyled.BackdropContent>
        {children}
      </BackdropStyled.BackdropContent>
    </BackdropStyled.BackdropWrapper>
  );
};
