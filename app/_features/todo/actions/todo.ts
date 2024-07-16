// todo action
"use server";

import prisma from "@/app/_lib/prisma";

import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getTodos = async (): Promise<Todo[]> => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return todos;
};

export const addTodo = async (data: FormData) => {
  const todo = data.get("content") as string;
  await prisma.todo.create({ data: { content: todo } });
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  // const id = data.get("id") as string;
  console.log(`delete tood by id=${id}`);
  await prisma.todo.delete({
    where: {
      id: +id,
    },
  });
  revalidatePath("/");
};

export const doneTodo = async (id: number, done: boolean) => {
  await prisma.todo.update({
    where: {
      id: +id,
    },
    data: {
      done: !done,
    },
  });
  revalidatePath("/");
};
