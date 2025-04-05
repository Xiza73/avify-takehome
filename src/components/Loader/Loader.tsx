import React from "react";

import { useLoader } from "../../store/loader/useLoader";
import Backdrop from "../Backdrop";
import { LoaderStyled } from "./Loader.styled";

export interface LoaderProps {
  loading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  const { activeLoaders, isFetching, hideLoader } = useLoader();

  if (!activeLoaders && !isFetching && !loading) return null;

  if (hideLoader) return null;

  return (
    <Backdrop>
      <LoaderStyled.LoaderWrapper
        data-testid="loader"
        role="presentation"
      ></LoaderStyled.LoaderWrapper>
    </Backdrop>
  );
};
