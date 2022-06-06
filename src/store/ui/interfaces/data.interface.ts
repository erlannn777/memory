export interface IModal<T = any> {
  data: T | null;
  coordinates?: { x: number; y: number };
  open: boolean;
}

export interface IUIData {
  createService: IModal;
  editService: IModal;
}

export type IUIState = IUIData;
