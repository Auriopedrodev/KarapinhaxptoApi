import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Administrativo/sidebars.js';
import '../Administrativo/sidebars.css';
import '../Administrador/Administrador.css';
import { sanguita1 } from '../../Components/imagens.jsx';
import TabelaActivarBloquearUtilizador from '../../Components/TabelaActivarBloquearUtilizador/TabelaActivarBloquearUtilizador.jsx';
import FormCriarAdministrativo from '../../Components/FormCriarAdministrativo/FormCriarAdministrativo.jsx';
import { Link } from 'react-router-dom';

export default function Administrador() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        telefone: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('id');
            try {
                const response = await axios.get(`https://localhost:7262/api/Utilizador/listUtilizadorbyId?id=${userId}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('id'); // ou localStorage.clear() para limpar tudo
        navigate('/'); // redireciona para a página de login
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <h3>KARAPINHA XPTO | <strong>CENTRAL</strong> </h3>
            </div>
            <div className="p-5 mt-1">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Conta</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Gestão</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div className="container mt-5">
                            <div className="d-flex">
                                <section className="p-3 rounded-4 customAdmin d-flex">
                                    <img className="imagemAdmin me-3" src={`https://localhost:7262/${userInfo?.foto}`}  alt="" />
                                    <div className="customTextAdmin d-flex flex-column">
                                        <div>
                                            <small className="text-light d-block mt-1">
                                                <strong>Informações Utilizador</strong>
                                            </small>
                                            <h3 className="text-light mb-0">@{userInfo.userName}</h3>
                                            <small className="text-light d-block mt-1">
                                                <i className="bi bi-star-fill"></i> <strong>Perfil Administrador</strong>
                                            </small>
                                            <small className="text-light d-block ">Email: {userInfo.email}</small>
                                            <small className="text-light d-block">Telefone: {userInfo.telemovel}</small>
                                        </div>
                                        <button onClick={handleLogout} className="btn btn-light mt-2 align-self-start w-auto">Sair da conta</button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className="container mt-5">
                            <div className="d-flex">
                                <section className="p-3 rounded-4 customAdmin d-flex flex-column align-items-center">
                                    <i className="bi bi-person-fill-add mt-1 text-light display-2"></i>
                                    <h4 className="mt-1 text-light">Adicionar novo Administrativo</h4>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <FormCriarAdministrativo/>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <TabelaActivarBloquearUtilizador/>
                    </div>
                </div>
            </div>
        </div>
    );
}
