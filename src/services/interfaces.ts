import * as Action from './actions';

export interface AppState {
    loading: boolean;
    error: any;
    list: any[];
}

export interface DeleteObject {
    type: typeof Action.DELETE_OBJ;
    payload: {data: any};
}

export type AppActionTypes = DeleteObject;