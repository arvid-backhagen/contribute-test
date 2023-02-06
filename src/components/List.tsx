import { Grid, Paper } from "@mui/material";
import { Todo } from "../types/Todo";
import { EditTodo } from "./EditTodo";
import { TodoItem } from "./TodoItem";

type ListProps = {
  todoList: { [key: string]: Todo };
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
  saveTodo: (id: string, todo: Todo) => void;
};
export const List = ({
  todoList,
  deleteTodo,
  updateTodo,
  saveTodo,
}: ListProps) => {
  const renderTodo = (key: any) => {
    if (todoList[key] == null) return null;
    if (todoList[key]["status"] === "active") {
      return (
        <TodoItem
          key={key}
          index={key}
          todo={todoList[key]}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      );
    } else if (todoList[key]["status"] === "editing") {
      return (
        <EditTodo
          key={key}
          index={key}
          todo={todoList[key]["todo"]}
          saveTodo={saveTodo}
        />
      );
    }
  };
  if (Object.keys(todoList).length === 0) {
    return (
      <Grid container style={{ width: "100%" }}>
        <p style={{ textAlign: "center", width: "100%" }}>
          No todo items, create one
        </p>
      </Grid>
    );
  }
  return (
    <Grid container>{Object.keys(todoList).map((key) => renderTodo(key))}</Grid>
  );
};
