import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES, TodoAction } from "../reducer/todoReducer";
import { RootState } from "../store/store";

export function useRedux() {
  const todos = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const addHandler = (title: string) => {
    dispatch({ type: ACTION_TYPES.ADD, payload: title } as TodoAction);
  };

  const updateHandler = (id: number) => {
    dispatch({ type: ACTION_TYPES.UPDATE, payload: id } as TodoAction);
  };

  const deleteHandler = (id: number) => {
    dispatch({ type: ACTION_TYPES.DELETE, payload: id } as TodoAction);
  };

  return { todos, addHandler, updateHandler, deleteHandler };
}
