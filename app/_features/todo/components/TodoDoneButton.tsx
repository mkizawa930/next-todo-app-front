"use client";

import { doneTodo } from "../actions/todo";

type Props = {
  id: number;
  done: boolean;
};

const TodoDoneButton = ({ id, done }: Props) => {
  const handleClick = async () => {
    const doneTodoWithId = doneTodo.bind(null, id, done);
    await doneTodoWithId();
  };

  return <button onClick={handleClick}>{done ? "undo" : "done"}</button>;
};

export default TodoDoneButton;
