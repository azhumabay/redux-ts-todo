export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialState: Todo[] = [
  { id: 1, title: "Test - 1", completed: false },
  { id: 2, title: "Test - 1", completed: false },
  { id: 3, title: "Test - 1", completed: true },
];

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

export function todoReducer(state = initialState, action: TodoAction): Todo[] {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    case ACTION_TYPES.UPDATE:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTION_TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
