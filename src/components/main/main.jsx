import React, {useEffect, useState} from 'react';
import './main.scss';
import {getTodos} from "../API/utils";
import Loader from "./loader/loader";
import Todo from "./todo/todo";
import {ImFileEmpty} from "@react-icons/all-files/im/ImFileEmpty";

const Main = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [base, setBase] = useState(null);

    useEffect(() => {
        getTodos(accessToken)
            .then(res => {
                setBase(res);
            })
    });


    return (
        <div className='container'>
            <h1 className='todo_h1'>Todo count: <span> {base ? base.todosCount : 0} </span></h1>
            <div className='todo_column'>
                {
                    (base && base?.todos.length !== 0) ? (
                        base?.todos.map(item => (
                                <Todo key={item.id} item={item}/>
                            )
                        )
                    ) : (base === null) ? (
                        <Loader />
                    ) : (
                        <h1><ImFileEmpty/></h1>
                    )
                }
            </div>


        </div>
    );
};

export default Main;