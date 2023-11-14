import { useState } from "react";

const CreateTodo = ({ todos, getTodos, lastTodoId }) => {
  const [newTodo, setNewTodo] = useState("");
  const onSubmitNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    const newTodos = [
      ...todos,
      { id: lastTodoId + 1, title: newTodo, isDone: false },
    ];

    localStorage.setItem("todos", JSON.stringify(newTodos));

    getTodos();
    setNewTodo("");
  };

  return (
    <form
      className="w-96 mx-auto mt-12 flex"
      value={newTodo}
      onSubmit={onSubmitNewTodo}
    >
      <input
        className="w-3/4 mr-4 rounded-md p-2 focus:outline-none border-2 border-cyan-300 focus:border-cyan-500"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        className="w-1/4 bg-black active:bg-gray-500 rounded-full text-white font-semibold"
        type="submit"
        value="➕"
      />
    </form>
  );
};

export default CreateTodo;
