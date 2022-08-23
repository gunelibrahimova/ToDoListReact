import React, { useEffect } from 'react'
import './todo.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getUserAction } from '../../redux/Actions/UserAction';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from '../ToDoList/ToDoList';


const ToDo = ({ input, setInput, todos, setTodos }) => {
    const { userInfo } = useSelector((state) => state.user)

    const dispach = useDispatch()

    useEffect(() => {
        dispach(getUserAction())
    }, [])



    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, complated: false }])
        setInput(" ")
    }

    const handleDelete = ({id }) =>{
        setTodos(todos.filter((todo) => todo.id != id))
    }

    const handleComplate = (todo) =>{
        todos.map((item) =>{
            if(item.id == todo.id){
                return {...item, complated : !item.complated};
            }
            else{
                return item;
            }
    })
    }


    return (
        <div id='todo'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    İstifadəçi adı :   {userInfo.fullName}
                                </h5>
                                <p></p>
                                <span>Email : {userInfo.email}</span>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                    </div>
                </div>
            </div>
            <div class="common">
                <h1>To Do List</h1>
                <div class="inputDiv d-flex align-items-center">
                    <form action="" onSubmit={onFormSubmit}>
                        <input type="text" id="input" placeholder="Nə etməlisiniz?" value={input} required onChange={onInputChange} />
                        <button class="btn btn-secondary" type='submit' id="button">Əlavə et</button>
                    </form>

                </div>
                <div class="contentDiv">
                    {
                        todos.map((todo) => (
                            <li type="text" className='list' key={todo.id} >
                                <input type="text" value={todo.title} onChange={(event) => event.preventDefault()} className={`${todo.complated ? "toggle" : " "}`}/>

                                <button className="button-complated" onClick = {() => handleComplate(todo)}>
                                    <i className="fa fa-check-circle"></i>
                                </button>
                                <button className="button-complated" onClick = {() => handleDelete(todo)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>

                        ))
                    }

                    {/* <ToDoList/> */}
                </div>
            </div>
        </div>
    )
}

export default ToDo