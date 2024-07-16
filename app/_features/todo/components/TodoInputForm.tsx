"use client";

import { ChangeEvent, useState } from "react";
import { addTodo } from "../actions/todo";

const TodoInputForm = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setText("");
  };

  return (
    <form
      action={addTodo}
      onSubmit={handleSubmit}
      className="flex justify-between"
    >
      <input
        className="border border-gray-500 rounded px-2 py-1 focus:outline-none"
        type="text"
        id="content"
        name="content"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="bg-slate-100 rounded ml-2 px-2">
        add
      </button>
    </form>
  );
};

export default TodoInputForm;
