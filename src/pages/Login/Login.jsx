import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { sanguita2 } from '../../Components/imagens';
import SignUp from '../../pages/SignUp/SignUp';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const submit = () => {
        
        axios.post('https://localhost:7262/api/Login/login', {
            userName: username,
            password: password
            
          }, {
            headers: {
              'Content-Type': 'application/json'
            }

          })
            .then(function (response) {
                const { id, perfilId, activar, validade } = response.data;
                console.log(id);
                // Armazena o ID no local storage
                localStorage.setItem('id', id);
                const userId = localStorage.getItem("id");
                
               if(validade == false){           
                // Redireciona com base no perfilId e ativação do perfil
                if (perfilId === 1) {
                    navigate('/administrador');
                } else if (perfilId === 2) {
                    if (!activar) {
                        navigate('/formValidacaoPassword');
                    } else {
                        navigate('/administrativo');
                    }
                } else if (perfilId === 4) {
                    
                    navigate('/profissional');
                } else if (perfilId === 3){
                    navigate('/clientes');
                }else{
                    alert("Credenciais Erradas!");
                    navigate('/login');
                }
            }else{
                alert("Sua conta ainda  bloqueada.");
                navigate('/login');
            }
            })
            .catch(function (error) {
                console.log(error);
            });
               
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 position-relative" >
                <div className="text-center">
                    <img
                        src={sanguita2}
                        alt="Placeholder"
                        className="mb-3"
                    />
                    <h2 className="TextKarapinha gradient-text">Karapinha <span>XPTO</span></h2>
                    <h3 className=''>Login</h3>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            className="form-control form-control-sm"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            className="form-control form-control-sm"
                        />
                    </div>
                    <a className="btn btn-dark btn-sm w-100" onClick={submit}>Entrar</a>
                    <div className="mt-2"><SignUp /></div>
                </form>
            </div>
        </div>
    );
}

export default Login;
