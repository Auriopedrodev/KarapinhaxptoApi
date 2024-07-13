import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PerfilUtilizador/PerfilUtilizador.css';
import { sanguita3 } from '../imagens';

export default function PerfilUtilizador() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('id');
        axios.get(`https://localhost:7262/listUtilizadorbyId?id=${userId}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (!userData) {
        return <div><div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div>;
    }

    return (
        <div className="conteudoPrincipal rounded-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={sanguita3} alt="Perfil" className="imagemPerfil img-circle" />
                </div>
                <div className="conteudoINFO col-md-6">
                    <h1 className="display-5">Informações da conta</h1>
                    <small>Username</small>
                    <p className="username mb-0">@{userData.userName}</p>
                    <hr />
                    <p className="mb-1"><strong>Nome:</strong> {userData.nomeCompleto}</p>
                    <p className="mb-1"><strong>BI:</strong> {userData.bi}</p>
                    <p className="mb-1"><strong>Email:</strong> {userData.email}</p>
                    <p className="mb-1"><strong>Telemóvel:</strong> {userData.telemovel}</p>
                   
                    
                </div>
            </div>
        </div>
    );
}
