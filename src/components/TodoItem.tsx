import { Build, Delete } from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";
import { useRef, useState } from "react";
import { Todo } from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
  index: string;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
};
export const TodoItem = ({
  todo,
  index,
  deleteTodo,
  updateTodo,
}: TodoItemProps) => {
  const gridRef = useRef();

  return (
    <Grid xs={12} item key={index} ref={gridRef.current}>
      <Paper
        elevation={2}
        style={{
          margin: "auto",
          padding: 10,
          display: "flex",
          alignItems: "center",
          marginTop: 10,
          width: 500,
        }}
      >
        <span>{todo.todo}</span>
        <IconButton
          color="primary"
          aria-label="Edit"
          style={{
            marginLeft: "auto",
          }}
          onClick={() => updateTodo(index)}
        >
          <Build fontSize="small" />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="Delete"
          onClick={() => deleteTodo(index)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>
  );
};
