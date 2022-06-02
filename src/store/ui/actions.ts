import { createAction } from "@reduxjs/toolkit";
import { IModal } from "./interfaces/data.interface";

export const openCreateServiceModal = createAction<IModal>(
  "ui/openCreateServiceModal"
);
export const closeCreateServiceModal = createAction<void>(
  "ui/closeCreateServiceModal"
);
export const openEditServiceModal = createAction<IModal>(
  "ui/openEditServiceModal"
);
export const closeEditServiceModal = createAction<void>(
  "ui/closeEditServiceModal"
);
