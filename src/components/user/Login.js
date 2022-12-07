
import { useState } from 'react';
import axios from 'axios';

import './Login.css';


const Login = () => {

    const [values, setValues ]= useState({
        username: "",
        password: ""
    })
    const loginSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://account.api.dev.indothon.com/api/v1/user/login/", {
            username: values.username,
            password: values.password
        }, {withCredentials: true})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    console.log(values)
    return(
        <>

        <div className="box__login">
            <div className="box__content__login">
                <div className='lable__login'>Login</div>
                <img src="../images/cyber_pana.png" className="hero__img__login" alt='hero'/>
                <div className="box__form__login">

                    <form className='group__form__login'
                    onSubmit={loginSubmit}>
                        <input type="text" name="text" className='form__input__login' placeholder='Username'
                        onChange={(e) => setValues({...values, username:e.target.value})}/>
                        <input type="password" name="password" className='form__input__login password' placeholder='Password'
                        onChange={(e) => setValues({...values, password:e.target.value})}/>
                        <button type='submit' name='login' className='btn__login'>LOGIN</button>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default Login;