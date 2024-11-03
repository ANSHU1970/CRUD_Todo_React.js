import React, { useState } from 'react'

export default function Todoinput(props) {
  const { handleAddTodos,setTodovalue,todoValue }=props

  

  return (
    <header>
        <input value={todoValue} onChange={(e)=>{
          setTodovalue(e.target.value)
        }} placeholder='Enter Todos...' />

        <button onClick={()=>{
          handleAddTodos(todoValue)
          setTodovalue('')
        }}>Add</button>

    </header>
  )
}
