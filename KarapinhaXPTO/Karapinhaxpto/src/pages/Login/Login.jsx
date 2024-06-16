import React, { useState } from 'react';
import axios from 'axios';
import '../Login/Login.jsx';
import { sanguita2 } from '../../Components/imagens';
import { useNavigate, Link } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submit = () => {
        axios.post('https://localhost:7262/api/Utilizador/login', {
            userName: username,
            password: password
        })
            .then(function (response) {
                localStorage.setItem(id, response.data.id)
                console.log(response);
                navigate('/utilizador')
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 position-relative" style={{ width: '400px' }}>
                <div className="text-center">
                    <img
                        src={sanguita2}
                        alt="Placeholder"
                        className="mb-3"
                    />
                    <h2 className="TextKarapinha gradient-text">Karapinha <span>XPTO</span></h2>
                    <h3 className=''>Login</h3>
                </div>
                <form >
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            className="form-control form-control-sm"
                            id="exampleInputEmail1"

                        />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            className="form-control form-control-sm"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <a className="btn btn-dark btn-sm w-100" onClick={submit}>Entrar</a>
              
                    <Link to = {'/SignUp'}className="btn btn-outline-dark btn-sm w-100 my-3" >Criar Conta</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;


