import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import "./Auth.scss"

const Auth = () => {
    const [isLoggin, setIsLoggin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const clickAuthMode  = () => {
        setIsLoggin((prev) => !prev)
    }

    useEffect (() => {
        const authStatus = Cookies.get('authStatus');
        if(authStatus === 'login'){
            setIsLoggin(true);
        } else {
            setIsLoggin(false);
        }
    }, [])

    const handleAuthAction = () => {
        if (!email || !password) {
            return;
        }
        if (!isLoggin && password !== checkPassword) {
            return;
        }
        Cookies.set('authStatus', 'login')
        Cookies.set('userEmail', email)
        console.log('click button')
    }
    
    return(
        <div className="auth">
            <h2>{ isLoggin ? "Вход в аккаунт" : "Регистрация" }</h2>

            <div className="form">
                <input 
                    type="email" 
                    placeholder="Логин"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="input_auth"
                />

                <input 
                    type="password" 
                    placeholder={ isLoggin ? "Пароль" : "Введите пароль"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="input_auth"
                />
                { !isLoggin && 
                    <input 
                        type="password" 
                        placeholder="Подтвердите пароль"
                        value={checkPassword}
                        onChange={(e)=>setCheckPassword(e.target.value)}
                        className="input_auth"
                    /> }

                <button onClick={handleAuthAction}>{isLoggin ? "Войти" : "Зарегистрироваться"}</button>

                <div>
                    {isLoggin ? (
                        <p>Не имеете аккаунт? <a href="#" onClick={clickAuthMode}>Зарегистрироваться</a></p>
                    ) : (
                        <p>Имеете аккаунт? <a href="#" onClick={clickAuthMode}>Войти</a></p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Auth;