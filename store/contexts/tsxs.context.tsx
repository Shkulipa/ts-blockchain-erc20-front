import { createContext, Dispatch, FC, useReducer } from "react";
import { ITsxContext } from "../../interfaces/tsxsContext.interface";
import { ITsxState, TsxAction } from "../../interfaces/tsxsReducer.interface";
import { tsxReducer, tsxState } from "../reducers/tsxs.reducer";

/**
 * docs(Typescript + context + Reducer): https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
 * code example: https://codesandbox.io/s/context-reducer-ts-9ctis?file=/src/context.tsx:530-542
 */

export const TsxContext = createContext<{
  state: ITsxState;
  dispatch: Dispatch<TsxAction>;
}>({
  state: tsxState,
  dispatch: () => null
});

export const TsxsProvider = ({ children }: ITsxContext): JSX.Element => {
  const [state, dispatch] = useReducer(tsxReducer, tsxState);

  return (
    <TsxContext.Provider value={{ state, dispatch }}>
      {children}
    </TsxContext.Provider>
  );
}