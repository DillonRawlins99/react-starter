import { useEffect, useState } from "react";

const useTodosFetch = (id) => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [id]);

  return todos;
};

const useTodosTest = (id) => {
  return { id: id, userId: 3, title: "Test", completed: false };
};

export default useTodosFetch;
