import React, {useState} from 'react';
import './reg.scss';
import {Link} from "react-router-dom";
import {getRegister} from "../API/routes";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            getRegister({email, password})
                .then(res => {
                    if (res) {
                        setShowAlert(true);
                        localStorage.setItem('accessToken', res.accessToken);
                        localStorage.setItem('refreshToken', res.refreshToken);
                        localStorage.setItem('user', JSON.stringify(res.user));
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
                        <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email*'/>
                    </div>
                    <div>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password}
                               placeholder='Password*'/>
                    </div>
                    {
                        showAlert && (
                            <div className='reg_form_alert'>
                                <h1>На вашу почту отправлена ссылка для активации аккаунта</h1>
                                <h3>Прежде чем перейти на главную, активируйте аккаунт</h3>
                            </div>
                        )
                    }
                    <div>
                        <button onClick={handleRegister}>Registration</button>
                    </div>
                    <div className='reg_form_auth'>
                        <Link to='/auth/login'>Have already an account?</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;