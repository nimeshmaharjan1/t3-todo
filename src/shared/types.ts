import { type RouterOutputs } from "./../utils/api";
import { number, z } from "zod";

type allTodosOutput = RouterOutputs["todo"]["getAll"];
export type Todo = allTodosOutput[number];

export const todoInput = z
  .string({
    required_error: "Describe your todo.",
  })
  .min(1)
  .max(255);

// toast.error(result.format()._errors.join('/n'))

// const trpc = api.useContext()
// const {mutate} = api.todo.create.useMutation({
//   onSettled: asunc () => {
//     await trpc.todo.all.invalidate()
//   }
// })
