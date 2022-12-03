import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './header.scss';
import {getOut} from "../API/utils";
import {RiMenu3Fill} from "@react-icons/all-files/ri/RiMenu3Fill";
import {MdPrivacyTip} from "react-icons/md";
import {ImExit} from "@react-icons/all-files/im/ImExit";


const Header = () => {
    const [toggle,setToggle] = useState(false);
    const user = localStorage.getItem('accessToken');
    const refreshToken= localStorage.getItem('refreshToken');
    const dropdown = () => setToggle(!toggle);
    const navigate= useNavigate();

    const signOut= () => {
        getOut({refreshToken})
            .then(()=>{
                localStorage.clear();
                setToggle(!toggle);
                navigate('/auth/reg');
            })
    }
    return (
        <div>
                <nav className={toggle && 'toggle'}>
                    <div>
                       <Link to='' ><h1>TODO API</h1></Link>
                    </div>
                    <div className={toggle ? 'buttons active' : 'buttons'}>
                        <Link to='/admin' className='btn_success' onClick={()=> setToggle(!toggle)}><MdPrivacyTip/> Admin</Link>
                        <Link to className='btn_danger' onClick={signOut}><ImExit/> Sign out</Link>
                    </div>
                    {
                        user && (
                            <div className='burger_menu'>
                                <RiMenu3Fill onClick={dropdown}/>
                            </div>
                        )
                    }
                </nav>
        </div>
    );
};

export default Header;