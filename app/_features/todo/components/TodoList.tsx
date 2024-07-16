import { Todo } from "@prisma/client";
import TodoListItem from "./TodoListItem";

type Props = {
  todos: Todo[];
};

const TodoList = ({ todos }: Props): JSX.Element => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
