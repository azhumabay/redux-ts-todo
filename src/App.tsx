import { Container } from "react-bootstrap";
import { AddTodo, TodoList } from "./components";

function App() {
  return (
    <>
      <Container className="mt-5">
        <AddTodo />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
