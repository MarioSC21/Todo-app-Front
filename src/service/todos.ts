import { Todo } from "@/interface/todo";

const URL = "http://localhost:3500"

export const getTodos = async() => {
  const todos = await fetch(`${URL}/todo`, {cache: 'no-store'}).then( res => res.json() );
  return todos as Todo[];
}

export const updateTodo = async( id: string, complete: boolean ) => {

  const body = { complete };

  const todo = await fetch(`${URL}/todo/${ id }`,{
    method: 'PUT',
    body: JSON.stringify( body ),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( res => res.json() );
  
  console.log({todo});

  return todo;
}


export const createTodo = async( description: string ) => {

  const body = { description };

  const todo = await fetch(`${URL}/todo`,{
    method: 'POST',
    body: JSON.stringify( body ),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( res => res.json() );
  
  console.log({todo});

  return todo;
}

export const deleteTodo = async(id: string) => {


  await fetch(`${URL}/todo/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( res => res.json() );
  

  return true;
}

