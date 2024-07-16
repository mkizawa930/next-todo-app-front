import Image from "next/image";
import prisma from "@/app/_lib/prisma";
import { getTodos } from "./_features/todo/actions/todo";
import TodoList from "./_features/todo/components/TodoList";
import TodoInputForm from "./_features/todo/components/TodoInputForm";

const Home = async () => {
  const todos = await getTodos();

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center h-full">
        <div className="">
          <div className="font-bold text-xl text-center py-8">
            Next.js Todo App
          </div>
          <div>
            <TodoInputForm />
          </div>
          <div className="pt-4">
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
