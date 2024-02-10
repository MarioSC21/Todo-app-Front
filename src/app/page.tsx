import { NewTodo } from '@/components/NewTodo'
import { TodosGrid } from '@/components/TodosGrid'
import { getTodos } from '@/service/todos'

export default async function Home () {
  const todos = await getTodos()
  return (
    <main className='h-screen flex flex-col justify-center items-center '>
      <div className='flex flex-col justify-center p-5 rounded-xl bg-stone-300/35'>
        <span className='text-3xl mb-10 font-bold'>Todo-App</span>

        <div className='w-full px-3 mx-5 mb-5'>
          <NewTodo />
        </div>

        <TodosGrid todos={todos} />

      </div>

    </main>
  )
}
