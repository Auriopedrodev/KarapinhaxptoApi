import React from 'react';
import '../Administrativo/sidebars.js';
import '../Administrativo/sidebars.css';
import '../Administrador/Administrador.css';
import { sanguita1 } from '../../Components/imagens.jsx';
import TabelaActivarBloquearUtilizador from '../../Components/TabelaActivarBloquearUtilizador/TabelaActivarBloquearUtilizador.jsx';
import FormCriarAdministrativo from '../../Components/FormCriarAdministrativo/FormCriarAdministrativo.jsx';

export default function Administrador() {
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
                                    <img className="imagemAdmin me-3" src={sanguita1} alt="" />
                                    <div className="customTextAdmin d-flex flex-column">
                                        <div>
                                            <small className="text-light d-block mt-1">
                                                <strong>Informações Utilizador</strong>
                                            </small>
                                            <h3 className="text-light mb-0">@Username</h3>
                                            <small className="text-light d-block mt-1">
                                                <i className="bi bi-star-fill"></i> Perfil Administrador
                                            </small>
                                            <small className="text-light d-block">Email:</small>
                                            <small className="text-light d-block">Tel:. +244</small>
                                        </div>
                                        <button className="btn btn-light mt-3 align-self-start">Sair da conta</button>
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
