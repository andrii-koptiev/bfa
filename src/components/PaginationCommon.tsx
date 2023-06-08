import { GridPagination, GridRenderPaginationProps } from "@mui/x-data-grid";
import React, { FC, memo } from "react";

const PaginationCommon: FC<GridRenderPaginationProps> = (props) => {
  return <GridPagination data-testid="pagination-common" {...props} />;
};

export default memo(PaginationCommon);
