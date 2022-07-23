import { Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import useTodos from "./useTodos";

const About = () => {
  const todoTextFieldRef = useRef(null);
  const [todoId, setTodoId] = useState("55");
  const todos = useTodos(todoId);
  return (
    <>
      <TextField
        size="small"
        label="Todo Id"
        inputRef={todoTextFieldRef}
      ></TextField>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => {
          setTodoId(todoTextFieldRef.current.value);
        }}
      >
        Set Todo Id
      </Button>
      <Typography variant="h3">About</Typography>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
};

export default About;
