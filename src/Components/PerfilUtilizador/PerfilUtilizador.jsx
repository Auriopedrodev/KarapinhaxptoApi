import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PerfilUtilizador/PerfilUtilizador.css';
import { useNavigate } from 'react-router-dom';
import FormEditarAdministrativo from '../FormEditarAdministrativo/FormEditarAdministrativo';
import FormEditarUtilizador from '../FormEditarUtilizador/FormEditarUtilizador';

export default function PerfilUtilizador() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const fetch= async()=> {
        const userId = localStorage.getItem('id');
        
        axios.get(`https://localhost:7262/api/Utilizador/listUtilizadorbyId?id=${userId}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
       fetch();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('id');
        navigate('/');
    };

    if (!userData) {
        return (
            <div>
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="conteudoPrincipal rounded-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={`https://localhost:7262/${userData?.foto}`} alt="Perfil" className="imagemPerfil img-circle" />
                </div>
                <div className="conteudoINFO col-md-6 text-light">
                    <h1 className="display-6 mt-5">Informações da conta</h1>
                    <small className="mt-4"><strong>Username</strong></small>
                    <p className="username mb-0">@{userData.userName}</p>
                    <hr />
                    <p className="mb-1"><strong>Nome:</strong> {userData.nomeCompleto}</p>
                    <p className="mb-1"><strong>BI:</strong> {userData.bi}</p>
                    <p className="mb-1"><strong>Email:</strong> {userData.email}</p>
                    <p className="mb-1"><strong>Telemóvel:</strong> {userData.telemovel}</p>
                    <FormEditarUtilizador fetch={fetch} props={userData} />
                    <button onClick={handleLogout} className="btn btn-outline-danger w-auto logButton">Logout</button>
                </div>
            </div>
        </div>
    );
}
