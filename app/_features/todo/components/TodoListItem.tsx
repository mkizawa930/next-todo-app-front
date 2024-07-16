import { Todo } from "@prisma/client";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoDoneButton from "./TodoDoneButton";

type Props = {
  todo: Todo;
};

const TodoListItem = ({ todo }: Props) => {
  return (
    <li
      className={[
        "flex items-center border rounded-lg w-64 p-2 space-x-2",
      ].join(" ")}
    >
      <div className={`flex-1 ml-2 ${todo.done && "line-through"}`}>
        {todo.content}
      </div>
      <TodoDoneButton id={todo.id} done={todo.done} />
      <TodoDeleteButton id={todo.id} />
    </li>
  );
};

export default TodoListItem;
