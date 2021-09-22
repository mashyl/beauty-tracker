import { Reducer } from "react";
import { withLoadable } from "utils/hoc/withLoadableReducer";
import * as Action from "./actions";
import { AppActionTypes, AppState } from "./interfaces";

const initialState: AppState = {
  loading: false,
  error: null,
  list: [],
};

const reducer: Reducer<AppState, AppActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Action.DELETE_OBJ: {
      return {
        ...state,
        deleted: true,
      };
    }
    default:
      return state;
  }
};

export const appReducer = withLoadable([
  Action.DELETE_OBJ,
])(reducer);
