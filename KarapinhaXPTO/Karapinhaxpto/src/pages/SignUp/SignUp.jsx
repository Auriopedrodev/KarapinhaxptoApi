import React from 'react';
import axios from 'axios';
import '../SignUp/SignUp.css';

export default function SignUp() {

  const [nomeCompleto, setnomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [foto, setFoto] = useState('')
  const [telemovel, setTelemovel] = useState('')
  const [bi, setBi] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [perfilId, setPerfilId] = useState('')
  const [activar, setActivar] = useState('')
  const [estadoUtilizador, setEstadoUtilizador] = useState('')
  
    const submit = () => {
        axios.post('https://localhost:7262/api/Utilizador/login', {
            nomeCompleto: nomeCompleto,
            email: email,
            foto: foto,
            telemovel: telemovel,
            bi: bi,
            userName: username,
            password: password,
            PerfilId : 2,
            Activar : false,
            EstadoUtilizador : true,
            
        })
            .then(function (response) {
                localStorage.setItem(id, response.data.id)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }



  return (
    <div className="container mt-5">
            <div className="card">
                <h2 className="text-dark mb-4">Registo </h2>
                <form className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="nomeUtilizador" className="form-label">Nome Utilizador*</label>
                        <input type="text" onChange={(e) => setnomeCompleto(e.target.value)}
                            value={nomeCompleto} className="form-control" id="nomeUtilizador" placeholder="Nome Utilizador" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputEmail" className="form-label">Email*</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                            value={email} type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="telemovel" className="form-label">Telemóvel</label>
                        <input onChange={(e) => setTelemovel(e.target.value)}
                            value={telemovel} type="text" className="form-control" id="telemovel" placeholder="Telemóvel" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bi" className="form-label">BI*</label>
                        <input onChange={(e) => setBi(e.target.value)}
                            value={bi} type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="username" className="form-label">Username*</label>
                        <input onChange={(e) => setUsername(e.target.value)}
                            value={username}type="text" className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputPassword" className="form-label">Password*</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                            value={password} type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmação Password*</label>
                        <input onChange={(e) => setConfirmar(e.target.value)}
                            value={File} type="password" className="form-control" id="confirmPassword" placeholder="Confirmação Password" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="confirmPassword" className="form-label">Foto</label>
                        <input onChange={(e) => setConfirmar(e.target.value)}
                            value={File} type="image" className="form-control" id="confirmPassword" placeholder="Confirmação Password" />
                    </div>
                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-dark me-2">Registar</button>
                    </div>
                </form>
            </div>
        </div>
  );
}

