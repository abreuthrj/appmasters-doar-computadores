/**
 * Cria o reducer da aplicação e as ações para
 * sua devida manipulação
 *
 * O tipo da snackbar é reaproveitado
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SnackbarProps } from "../../components/Snackbar";

type AppStateType = {
  snackbar: Required<SnackbarProps>;
};

const initialState: AppStateType = {
  snackbar: {
    text: "",
    duration: 3000,
    visible: false,
    type: "success",
  },
};

const appSlice = createSlice({
  initialState,
  name: "App",
  reducers: {
    showSnackAction: (state, { payload }: PayloadAction<SnackbarProps>) => {
      state.snackbar.visible = true;
      state.snackbar.text = payload.text;
      state.snackbar.duration =
        payload.duration || initialState.snackbar.duration;
      state.snackbar.type = payload.type || initialState.snackbar.type;
    },

    hideSnackAction: (state) => {
      state.snackbar.visible = false;
      state.snackbar.duration = initialState.snackbar.duration;
      state.snackbar.type = initialState.snackbar.type;
    },
  },
});

export default appSlice.reducer;
export const { showSnackAction, hideSnackAction } = appSlice.actions;
