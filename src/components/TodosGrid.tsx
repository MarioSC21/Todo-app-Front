'use client';

import * as todosApi from '@/service/todos'
import { useRouter } from "next/navigation";
import { TodoItem } from "./TodoItem";
import { Todo } from '@/interface/todo';


interface Props {
  todos?: Todo[];
}


export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  const toggleTodo = async(id: string, complete: boolean) => {
    const updatedTodo = await todosApi.updateTodo( id, complete );
    console.log({updatedTodo});
    router.refresh();
  }

  const deleteTodo = async(id: string) => {
    await todosApi.deleteTodo( id );
    router.refresh();
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map( todo => (
          <TodoItem key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } deleteTodo={deleteTodo} />
        ))
      }
    </div>
  )
}
