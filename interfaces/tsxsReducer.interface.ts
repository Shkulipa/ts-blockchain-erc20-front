import { ITsx } from "./tsx.interface";

export enum ETsxAction {
  FETCH_TSX= 'FETCH_TSX',
  FETCH_TSX_SUCCESS= 'FETCH_TSX_SUCCESS',
  FETCH_TSX_ERROR= 'FETCH_TSX_ERROR',
}

export interface ITsxState {
  tsxs: ITsx[],
  loading: boolean,
  error: string | null
}


interface IFetchTsxAction {
  type: ETsxAction.FETCH_TSX
}
interface IFetchTsxSuccessAction {
  type: ETsxAction.FETCH_TSX_SUCCESS;
  payload: ITsx[];
}
interface IFetchTsxErrorAction {
  type: ETsxAction.FETCH_TSX_ERROR;
  payload: string;
}

export type TsxAction =
  IFetchTsxAction
  | IFetchTsxSuccessAction
  | IFetchTsxErrorAction;

