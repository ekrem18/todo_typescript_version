import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: TodoType[];
  deleteTodo:DeleteFn;
  toggleTodo:ToggleFn
}

const TodoList: React.FC<ITodoList> = ({ todos,toggleTodo,deleteTodo }) => {
  const progressTodos = todos.filter(item => !item.isDone);
  const completedTodos = todos.filter(item => item.isDone);
  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid red",
          borderRadius: "0.5rem",
          backgroundColor: "#ff8a80",
          p: "1rem",
          minHeight: "350px",
        }}>
        <Typography color="red" align="center" variant="h4">
        To-Do List
        </Typography>
        {progressTodos.length ? (
          progressTodos.map(todo => (
            <TodoListItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Progress todos!{" "}
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          backgroundColor: "#c5e1a5",
          p: "1rem",
          minHeight: "350px",
        }}>
        <Typography sx={{ color: "green" }} align="center" variant="h4">
          Completed List
        </Typography>
        {completedTodos.length ? (
          completedTodos.map(todo => (
            <TodoListItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed todos!{" "}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
