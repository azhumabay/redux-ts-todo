import { createStore } from "redux";
import { todoReducer } from "../reducer/todoReducer";

export const store = createStore(todoReducer);

export type RootState = ReturnType<typeof store.getState>;
