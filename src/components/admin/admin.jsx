import React, {useState} from 'react';
import './admin.scss';
import {Link} from "react-router-dom";
import {getCreate} from "../API/utils";

const Admin = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [alert,setAlert] = useState(false);
    const [error, setError] = useState(false);

    const handleAdding= (e) =>{
        e.preventDefault();
        if (title !== '' && content !== '' && date !== ''){
            getCreate(accessToken, {title,content,date})
                .then(()=>{
                    setAlert(true);
                    setError(false);
                })
        } else{
            setError(true);
            setAlert(false);
        }
    }

    return (
        <div className='container'>
            {
                alert && (
                    <div className="alert_todo">
                        Successful adding...
                    </div>
                )
            }
            {
                error && (
                    <div className="error_todo">
                        Fill the area!
                    </div>
                )
            }
            <div className='todo_form'>
                <h1>Admin</h1>
                <hr/>
                <form>
                    <div>
                        <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder='Title *'/>
                    </div>
                    <div>
                        <input type="text" onChange={e => setContent(e.target.value)} value={content}
                               placeholder='Content *'/>
                    </div>
                    <div>
                        <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
                    </div>
                    <div>
                        <button onClick={handleAdding}>Adding</button>
                    </div>
                    <div className='todo_form_main'>
                        <Link to='/main'>Home</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Admin;