import { FC, useState, ChangeEvent } from "react";
import { useRedux } from "../use/useRedux";

const AddTodo: FC = () => {
  const { addHandler } = useRedux();
  const [input, setInput] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTaskHandler = () => {
    addHandler(input);
    setInput("");
  };

  return (
    <>
      <input type="text" value={input} onChange={onChangeHandler} />
      <button onClick={addTaskHandler}>Add Task</button>
    </>
  );
};

export default AddTodo;
