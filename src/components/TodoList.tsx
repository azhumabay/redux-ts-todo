import { FC } from "react";
import { useRedux } from "../use/useRedux";

const TodoList: FC = () => {
  const { todos } = useRedux();

  return (
    <>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </>
  );
};

export default TodoList;
