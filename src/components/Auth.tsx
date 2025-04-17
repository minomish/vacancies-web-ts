import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./Auth.scss"

const Auth = () => {
    const [isLoggin, setIsLoggin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [error, setError] = useState('');

    const navigate = useNavigate()
    

    const clickAuthMode  = () => {
        setIsLoggin((prev) => !prev)
        setError('')
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
            setError('Введите email и пароль');
            return;
        }
    
        const usersCookie = Cookies.get('users');
        const users = usersCookie ? JSON.parse(usersCookie) : {};
    
        if (isLoggin) {
            if (users[email] && users[email] === password) {
                Cookies.set('authStatus', 'login');
                Cookies.set('userEmail', email);
                navigate("/joblist");
            } else {
                setError('Неверный логин или пароль');
            }
        } else {
            if (users[email]) {
                setError('Такой пользователь уже зарегистрирован');
                return;
            }
            if (password !== checkPassword) {
                setError('Пароли не совпадают');
                return;
            }
    
            const updatedUsers = { ...users, [email]: password };
            Cookies.set('users', JSON.stringify(updatedUsers));
    
            Cookies.set('authStatus', 'login');
            Cookies.set('userEmail', email);
            navigate("/joblist");
        }
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
                {error && <p className="error">{error}</p>}


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