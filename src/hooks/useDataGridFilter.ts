import { getGridStringOperators } from "@mui/x-data-grid";
import { useCallback } from "react";


export const useDataGridFilter = () => {
  const removeStringOperator = useCallback((operatorToRemove: string[]) => {
    return getGridStringOperators().filter((operator) => {
      if (operatorToRemove.includes(operator.value)) {
        return null;
      }

      return operator.value;
    });
  }, []);

  return { removeStringOperator };
};