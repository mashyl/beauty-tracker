import { AppActionTypes, AppState } from "services/interfaces";

interface IReducerMap {
  [key: string]: (...args: any[]) => void;
}

const isLoadingReducer = (state: AppState) => ({
  ...state,
  error: null,
  loading: true,
});

const successReducer = (state: AppState) => ({
  ...state,
  error: null,
  loading: false,
});

const errorReducer = (state: AppState, action: AppActionTypes) => ({
  ...state,
  error: action.payload,
  loading: false,
});

const noopReducer = (state: AppState) => state;

export const withLoadable = (actionTypes: string[]) => {
  const actionReducerMap: IReducerMap = actionTypes.reduce(
    (acum, item) => ({
      ...acum,
      [item]: isLoadingReducer,
      [`${item}_SUCCESS`]: successReducer,
      [`${item}_FAILURE`]: errorReducer,
    }),
    {}
  );

  return (baseReducer: (...args: any[]) => void) =>
    (state: any, action: AppActionTypes) => {
      const reducerFunction = actionReducerMap[action.type] || noopReducer;
      const newState = reducerFunction(state, action);
      return baseReducer(newState, action);
    };
};
