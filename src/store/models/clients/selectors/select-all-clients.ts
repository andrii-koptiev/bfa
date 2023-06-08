import { createSelector } from "@rematch/select";

import { RootState } from "../../../store";
import { ClientStateType } from "../types";

export const selectAllClients = createSelector(
  (rootState: RootState) => rootState.clients,
  (state): ClientStateType["clients"] => state.clients
);
