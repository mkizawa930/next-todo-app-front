"use client";

import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../actions/todo";

type Props = {
  id: number;
};

const TodoDeleteButton = ({ id }: Props) => {
  const deleteTodoWithId = deleteTodo.bind(null, id); // 第一引数はインスタンスを指すが、関数なのでnull, 第二引数以降は呼び出し元の関数の第一引数から順に追加される

  const handleClick = async () => {
    await deleteTodoWithId(new FormData());
  };

  return (
    <button onClick={handleClick}>
      <MdDelete />
    </button>
  );
};

export default TodoDeleteButton;
