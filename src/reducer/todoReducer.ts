export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type InitialState = {
  todos: Todo[];
};

const initialState: InitialState = {
  todos: [
    { id: 1, title: "Test - 1", completed: false },
    { id: 2, title: "Test - 2", completed: false },
    { id: 3, title: "Test - 3", completed: true },
  ],
};

export const enum ACTION_TYPES {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

type AddAction = {
  type: ACTION_TYPES.ADD;
  payload: string;
};

type UpdateAction = {
  type: ACTION_TYPES.UPDATE;
  payload: number;
};

type DeleteAction = {
  type: ACTION_TYPES.DELETE;
  payload: number;
};

export type TodoAction = AddAction | UpdateAction | DeleteAction;

export function todoReducer(
  state = initialState,
  action: TodoAction
): InitialState {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.payload, completed: false },
        ],
      };

    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
