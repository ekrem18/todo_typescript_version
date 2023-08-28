import React, { useState } from 'react'

interface TodoType {
  todo: string;
  isDone: boolean;
  id: string | number ;
}

const Home = () => {
  const[todos, setTodos] = useState<TodoType[]>([])

  return (
    <div onClick={()=> setTodos([{id:5, todo:"emre", isDone:true }])}>Homes</div>
  )
}

export default Home