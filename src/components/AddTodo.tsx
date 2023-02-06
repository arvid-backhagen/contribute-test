import { Button, Input } from "@mui/material";
import { FormEvent, useRef } from "react";
import { Todo } from "../types/Todo";

type AddTodoProps = {
  addToList: (todo: Todo) => void;
};
export const AddTodo = ({ addToList }: AddTodoProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      console.log(inputRef.current?.value);
      if (inputRef.current?.value === "") {
        return null;
      }

      addToList({ todo: inputRef.current.value, status: "active" });
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <Input
        placeholder="Todo"
        inputProps={{
          "aria-label": "Description",
        }}
        inputRef={inputRef}
        style={{ width: "90%" }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "10%" }}
      >
        Add
      </Button>
    </form>
  );
};
