import { useState,useEffect } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue,setTodovalue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos : newList }))
  }

  function handleAddTodos(new_todo){
    const newTodoList=[...todos,new_todo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited=todos[index]
    setTodovalue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  
  useEffect(()=>{
    if (!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
           return
        }
        localTodos=JSON.parse(localTodos).todos
        setTodos(localTodos)
  },[])

  return (
    <>
      <Todoinput todoValue={todoValue} setTodovalue={setTodovalue} handleAddTodos={handleAddTodos}/>
      <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />

    </>
  )
}

export default App
