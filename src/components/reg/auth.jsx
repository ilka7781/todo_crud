import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './reg.scss';
import {getAuth} from "../API/routes";


const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAuth = (e) =>{
        e.preventDefault();
        if(email !== '' && password !== ''){
            getAuth({email,password})
                .then(res => {
                    if (res) {
                        localStorage.setItem('accessToken', res.accessToken);
                        localStorage.setItem('refreshToken', res.refreshToken);
                        localStorage.setItem('user', JSON.stringify(res.user));
                        navigate('/main');
                    }
                })
        }
    }

    return (
        <div className='container'>
            <div className='reg_form'>
                <h1>Registration</h1>
                <hr/>
                <form>
                    <div>
                        <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email *'/>
                    </div>
                    <div>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password}
                               placeholder='Password *'/>
                    </div>
                    <div>
                        <button onClick={handleAuth}>Authorization</button>
                    </div>
                    <div className='reg_form_auth'>
                        <Link to='/auth/register'>Create a new account</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Auth;