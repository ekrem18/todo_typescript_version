import React, { useState } from 'react'

interface TodoType {
  todo: string;
  isDone: boolean;
  id: string | number ;
}

const Home = () => {
  const[todos, setTodos] = useState([])

  return (
    <div>Home</div>
  )
}

export default Home