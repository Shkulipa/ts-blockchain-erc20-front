import { ITsxState, TsxAction } from '../../interfaces/tsxsReducer.interface';
import { ETsxAction } from "../../interfaces/tsxsReducer.interface";


export const tsxState: ITsxState = {
  tsxs: [],
  loading: false,
  error: null
}

export const tsxReducer = (state: ITsxState, action: TsxAction): ITsxState => {
  switch (action.type) {
    case ETsxAction.FETCH_TSX:
      return {...state, loading: true}
    case ETsxAction.FETCH_TSX_SUCCESS:
      return {...state, loading: false, error: null, tsxs: action.payload}
    case ETsxAction.FETCH_TSX_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return tsxState
  }
}
