import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";
import { Todo } from "./types/Todo";

const App = () => {
  const [todoList, setTodoList] = useState<{ [key: string]: Todo }>({});

  const addToList = (todo: Todo) => {
    setTodoList((currentList) => ({
      ...currentList,
      [`todo${Date.now()}`]: todo,
    }));
  };
  const deleteTodo = (id: string) => {
    setTodoList((currentList) => {
      const shallowCopy = { ...currentList };
      delete shallowCopy[id];
      return shallowCopy;
    });
  };
  const updateTodo = (id: string) => {
    setTodoList((currentList) => {
      currentList[id].status = "editing";

      return { ...currentList };
    });
  };
  const saveTodo = (id: string, todo: Todo) => {
    setTodoList((currentList) => ({
      ...currentList,
      [id]: todo,
    }));
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper
            style={{
              padding: 20,
              margin: "auto",
              textAlign: "center",
              width: 500,
            }}
          >
            <AddTodo addToList={addToList} />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: 20,
            margin: "auto",
            textAlign: "center",
            width: 500,
          }}
        >
          <List
            deleteTodo={deleteTodo}
            todoList={todoList}
            updateTodo={updateTodo}
            saveTodo={saveTodo}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
