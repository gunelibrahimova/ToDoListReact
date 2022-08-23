import React, { useEffect, useState } from 'react'
import Login from '../components/Login/Login'
import { useDispatch,useSelector } from 'react-redux'
import Dashboard from './Dashboard'
import { getUserAction } from './../redux/Actions/UserAction';
import ToDo from '../components/ToDo/ToDo';
import ToDoList from '../components/ToDoList/ToDoList';

const Auth = () => {

  // const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const[input, setInput] = useState("");
  const[todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const {userInfo} = useSelector((state) => state.user)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(getUserAction())
  },[dispach])

  if (userInfo.length !==0 ) {
    return (
      <div>
          {/* <Dashboard /> */}
          <ToDo
           input = {input}
           setInput = {setInput}
           todos = {todos}
           setTodos = {setTodos}
           setEditTodo = {setEditTodo}
          
          />

          
      </div>
    )
  }else{
    return (
      <div>
          <Login />
      </div>
    )
  }
}

export default Auth