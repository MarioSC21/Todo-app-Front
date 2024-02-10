'use client'

import { Todo } from '@/interface/todo'
import { useRouter } from 'next/navigation'

import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline, IoTrashSharp } from 'react-icons/io5'

interface Props {
  todo: Todo
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
  deleteTodo: (id: string) => Promise<void>
}

export const TodoItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  const router = useRouter()
  const isComplete = todo.complete

  const onToggleTodo = async () => {
    await toggleTodo(todo.id, !todo.complete)
    router.refresh()
  }

  const deleteTodoF = async () => {
    await deleteTodo(todo.id)
    router.refresh()
  }

  return (

    <div className={isComplete ? styles.todoDone : styles.todoPending}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>

        <div
          onClick={() => onToggleTodo()}
          className={`
              flex p-2 rounded-md cursor-pointer
              hover:bg-opacity-60
              ${isComplete ? 'bg-blue-100' : 'bg-red-100'}
            `}
        >
          {
              isComplete
                ? <IoCheckboxOutline size={30} />
                : <IoSquareOutline size={30} />
            }

        </div>

        <div className='text-center sm:text-left'>
          {todo.description}
        </div>

      </div>
      <div
        onClick={() => deleteTodoF()}
        className='flex p-2 rounded-md cursor-pointer hover:bg-opacity-60'
      >
        <IoTrashSharp size={30} />
      </div>
    </div>
  )
}
