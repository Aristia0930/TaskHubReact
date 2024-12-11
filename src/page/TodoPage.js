import TodoTemplate from '.././todo/TodoTemplate';
import TodoInsert from '.././todo/TodoInsert';
import TodoList from '.././todo/TodoList';
import { useCallback, useRef, useState } from 'react';

function TodoPage() {
  const [todos,setTodos]=useState([
    {
      id:1,
      text:"리액트의 기초",
      checked:true,
    },
    {
      id:2,
      text:"todo리스트 만들기",
      checked:false,
    },
  ])

  const nextId=useRef(3)

  //항목추가

  const onInsert = useCallback( text=>{
    const todo = {
      id : nextId.current,
      text ,
      checked : false
    }
    setTodos(todos=>todos.concat(todo))
    nextId.current+=1
  },[])
  //항목제거
  const onRemove=useCallback(id=>{
    setTodos(todos=>todos.filter(todo=>todo.id!==id))
  },[])

  //체크기능
  const onToggle=useCallback(id=>{
    setTodos(todos=>todos.map(todo=> todo.id===id ?{...todo,checked:!todo.checked}:todo))

  },[])

  //수정하기
  const modify=useCallback((id,text)=>{
    setTodos(todos=>todos.map(todo=>todo.id===id ? {id:todo.id,text:text,checked:todo.checked}:todo))
  },[])
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} modify={modify}/>
    
      
      </TodoTemplate>

    </div>
  );
} 

export default TodoPage;