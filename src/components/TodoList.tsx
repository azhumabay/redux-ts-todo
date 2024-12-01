import { FC } from "react";
import { useRedux } from "../use/useRedux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TodoList: FC = () => {
  const { todos, updateDispatch, deleteDispatch } = useRedux();

  return (
    <>
      <ListGroup>
        {todos.map(({ id, title, completed }) => (
          <ListGroup.Item
            key={id}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="fs-5">{title}</div>
            <ButtonGroup>
              <Button
                variant={completed ? "success" : "warning"}
                onClick={() => updateDispatch(id)}
              >
                {completed ? "Выполнено" : "В процессе"}
              </Button>
              <Button variant="danger" onClick={() => deleteDispatch(id)}>
                Удалить
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
