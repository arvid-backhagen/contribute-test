import { Save } from "@mui/icons-material";
import { Grid, IconButton, Input, Paper } from "@mui/material";
import { useRef } from "react";

export const EditTodo = (props: any) => {
  const inputRef = useRef<HTMLInputElement>();

  return (
    <Grid xs={12} item key={props.index}>
      <Paper elevation={2} style={styles.Paper}>
        <form
          onSubmit={() => {
            props.saveTodo(props.index, {
              todo: inputRef.current?.value,
              status: "active",
            });
          }}
          style={{ display: "flex" }}
        >
          <Input
            style={{ width: "90%" }}
            defaultValue={props.todo}
            inputRef={inputRef}
          />
          <IconButton
            type="submit"
            color="primary"
            aria-label="Add"
            style={styles.Icon}
          >
            <Save fontSize="small" />
          </IconButton>
        </form>
      </Paper>
    </Grid>
  );
};

const styles = {
  Icon: {
    marginLeft: "auto",
    width: "10%",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};
