import { Action } from "redux";
import { AppState } from "./AppState";

const initialState: AppState = {
  today: new Date(),
};

export const rootReducer = (state: AppState = initialState, action: Action) =>
  state;
