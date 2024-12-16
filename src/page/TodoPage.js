import TodoTemplate from '.././todo/TodoTemplate';
import TodoInsert from '.././todo/TodoInsert';
import TodoList from '.././todo/TodoList';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate } from 'react-router-dom';

function TodoPage() {
  const apiUrl = process.env.REACT_APP_API_URL;
  //수정삭제 새로 추가시에만 다시 값불러오도록 하기
  const navigate = useNavigate();
  const[todos,setTodos]=useState([])
  const todosData=async()=>{
    console.log("데이터1")
    try{
      const rs=await axios.get(`${apiUrl}/todo/data`,{ withCredentials: true })
      if(rs.status===200){
        setTodos(rs.data)
      }
    }catch(error){
      console.log(error)
      navigate('/')
      //권한이 없으니 홈으로 리던시키지ㅏ
    }
    console.log(todos)
  }
  useEffect(()=>{
    todosData();
  },[])


  //항목추가

  const onInsert = useCallback(async (text)=>{
    const todo = {
      text ,
      checked : false
    }
    try{
      const rs=await axios.post(`${apiUrl}/todo/insert`,todo,{ withCredentials: true })
      if(rs.status===200){
        console.log("todo추가완료")
      }
    }catch(error){
      console.log(error)
      navigate('/')
    }

    // setTodos(todos=>todos.concat(todo))
    todosData();


  },[])
  //항목제거
  const onRemove=useCallback(async(id)=>{


    try{
      const rs=await axios.delete(`${apiUrl}/todo/remove/${id}`,{ withCredentials: true })
      if(rs.status===200){
        console.log("todo삭제완료")
      }
    }catch(error){
      console.log(error)
      navigate('/')
    }
    todosData();
    // setTodos(todos=>todos.filter(todo=>todo.id!==id))
  },[])

  //체크기능
  const onToggle=useCallback(async(id)=>{
    const todo = todos.find(todo => todo.id === id); // 해당 todo 찾기
    const checked = !todo.checked; // 체크 상태 반전
 
    try{
      const rs=await axios.put(`${apiUrl}/todo/toggle/${id}`,{checked},{ withCredentials: true })
      if(rs.status===200){
        console.log("토클수정완료")
      }
    }catch(error){
      console.log(error)
      navigate('/')
    }
    todosData();
    // setTodos(todos=>todos.map(todo=> todo.id===id ?{...todo,checked:!todo.checked}:todo))

  },[apiUrl,todos])

  //수정하기
  const modify=useCallback(async(id,text)=>{
    try{
      const rs=await axios.put(`${apiUrl}/todo/modify/${id}`,{text},{ withCredentials: true })
      if(rs.status===200){
        console.log("토클수정완료")
      }
    }catch(error){
      console.log(error)
      navigate('/')
    }
    todosData();
    // setTodos(todos=>todos.map(todo=>todo.id===id ? {id:todo.id,text:text,checked:todo.checked}:todo))
  },[apiUrl,todos])


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