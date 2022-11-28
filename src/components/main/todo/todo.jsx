import React, {useState} from 'react';
import './todo.scss';
import {AiFillDelete} from "@react-icons/all-files/ai/AiFillDelete";
import {AiFillCheckCircle} from "@react-icons/all-files/ai/AiFillCheckCircle";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit";
import {getCompleted, getDelete, getEdit, getSingleTodo} from "../../API/routes";
import {BsFillCheckCircleFill} from "react-icons/bs";

const Todo = ({item}) => {
    const accessToken = localStorage.getItem('accessToken');
    const [showInput, setShowInput] = useState(false);
    const [title, setTitle] = useState('');
    const [changeTitle, setChange] = useState('');

    //delete
    const deleteTodo = (id) => {
        getDelete(id, accessToken)
            .then()
    }

    //complete
    const completeTodo = (id) => {
        getCompleted(id, accessToken)
            .then()
    }

    //edit
    const getTitleToEditTodo = (id) => {
        getSingleTodo(id, accessToken)
            .then(res => {
                setShowInput(true)
                setTitle(res)
            })
    }
    const editTodo = (id) => {
        getEdit(id, accessToken, {
            title: changeTitle || title.title
        })
            .then(() => {
                setShowInput(false)
            })
    }

    return (
        <div className="todo_card">
            <h3>{item.title} </h3>
            {
                item.completed && (
                    <div className="todo_card_completed">
                        <BsFillCheckCircleFill/>
                    </div>
                )
            }

            <div className="card_body">
                <p className='card_body_content'>{item.content}</p>
                <p className='card_body_date'>{item.date}</p>
            </div>
            {
                showInput && (
                    <div className="card_change_input">
                        <h5>Change title to : </h5>
                        <input type="text" placeholder='Change to new title ' onChange={e => setChange(e.target.value)}
                               defaultValue={title.title}/>
                        <button onClick={() => editTodo(item.id)}>Change</button>
                    </div>
                )
            }
            <div className="todo_card_footer">
                <button className='buttons_todo' onClick={() => deleteTodo(item.id)}><AiFillDelete/></button>
                <button className='buttons_todo' onClick={() => completeTodo(item.id)}><AiFillCheckCircle/></button>
                <button className='buttons_todo' onClick={() => getTitleToEditTodo(item.id)}><FaEdit/></button>
            </div>


        </div>
    );
};

export default Todo;