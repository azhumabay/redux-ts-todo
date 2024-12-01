import { FC, useState, ChangeEvent } from "react";
import { useRedux } from "../use/useRedux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddTodo: FC = () => {
  const { addDispatch } = useRedux();
  const [input, setInput] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTaskHandler = () => {
    if (input.length > 0) {
      addDispatch(input);
      setInput("");
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Task title"
          value={input}
          onChange={onChangeHandler}
        />
        <Button variant="outline-secondary" onClick={addTaskHandler}>
          Add task
        </Button>
      </InputGroup>
    </>
  );
};

export default AddTodo;
