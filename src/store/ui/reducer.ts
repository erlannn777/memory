import { createReducer } from "@reduxjs/toolkit";
import {
  closeCreateServiceModal,
  closeEditServiceModal,
  closeOrderModal,
  openCreateServiceModal,
  openEditServiceModal,
  openOrderModal,
} from "./actions";

import { IUIState } from "./interfaces/data.interface";

export const initialState: IUIState = {
  createService: {
    data: null,
    open: false,
  },
  editService: {
    data: null,
    open: false,
  },
  order: {
    data: null,
    open: false,
  },
};

export default createReducer<IUIState>(initialState, (buiilder) =>
  buiilder
    .addCase(
      openCreateServiceModal,
      (state, { payload }): IUIState => ({
        ...state,
        createService: payload,
      })
    )
    .addCase(
      closeCreateServiceModal,
      (state): IUIState => ({
        ...state,
        createService: {
          ...state.editService,
          open: false,
        },
      })
    )
    .addCase(
      openEditServiceModal,
      (state, { payload }): IUIState => ({
        ...state,
        editService: payload,
      })
    )
    .addCase(
      closeEditServiceModal,
      (state): IUIState => ({
        ...state,
        editService: {
          ...state.editService,
          open: false,
        },
      })
    )
    .addCase(
      openOrderModal,
      (state, { payload }): IUIState => ({
        ...state,
        order: payload,
      })
    )
    .addCase(
      closeOrderModal,
      (state): IUIState => ({
        ...state,
        order: {
          ...state.order,
          open: false,
        },
      })
    )
);
