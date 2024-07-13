import React, { useState } from 'react';
import './sidebars.css';
import './sidebars.js';
import './Administrativo.css';
import { sanguita1 } from '../../Components/imagens.jsx';
import FormEditarAdministrativo from '../../Components/FormEditarAdministrativo/FormEditarAdministrativo.jsx';
import FormCriarProfissional from '../../Components/FormCriarProfissional/FormCriarProfissional.jsx';
import FormCriarServico from '../../Components/FormCriarServico/FormCriarServico.jsx';
import FormReagendarMarcacao from '../../Components/FormReagendarMarcacao/FormReagendarMarcacao.jsx';
import TabelaClienteAdmin from '../../Components/TabelaClientesAdmin/TabelaClienteAdmin.jsx';
import TabelaProfissionais from '../../Components/TabelaProfissionais/TabelaProfissionais.jsx';
import TabelaServicos from '../../Components/TabelaServicos/TabelaServicos.jsx';
import FormCarrinho from '../../Components/FormCarrinho/FormCarrinho.jsx';
import TabelaMarcacao from '../../Components/TabelaMarcacao/TabelaMarcacao.jsx';

const Administrativo = () => {
  const [currentTab, setCurrentTab] = useState('Utilizador');

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 sidebar ">
          <div className="menu">
            <div>
              <img class="rounded-circle imagemUtilizador ms-5 mt-lg-5 " src={ sanguita1 } alt="" />
            </div>
            <button
              className={`w-75 btn ${currentTab === 'Utilizador' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Utilizador')}
            ><i class="bi bi-person-fill"></i> Utilizador
            </button>
            <button
              className={`w-75 btn ${currentTab === 'Servicos' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Servicos')}
            ><i class="bi bi-bag-fill"></i> Serviços
            </button>
            <button
              className={`w-75 btn ${currentTab === 'Marcacao' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Marcacao')}
            ><i class="bi bi-cart-fill"></i> Marcação
            </button>
            <button
              className={`w-75 btn ${currentTab === 'Agenda' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Agenda')}
            ><i class="bi bi-calendar-fill"></i> Agenda
            </button>
            <button
              className={` w-75 btn ${currentTab === 'Progresso' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Progresso')}
            >
              <i class="bi bi-graph-up-arrow"></i> Progresso
            </button>

          </div>
        </div>

        <div className="col-10 content p-4">
          {currentTab === 'Utilizador' && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>utilizadores</strong></h2>
              <ul className="submenu nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  > Gerir Clientes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="true">
                    Gerir Profissionais
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                  tabIndex="0" >
                  <div className="Container UtilizadorCliente">
                    <div className="container">
                      <div className="row">
                        <section className="col">
                          <div className="p-3 rounded-4 custom-funcionailidades">
                            <div className="d-flex align-items-center">
                              <img className="imagemUtilizador" src={sanguita1} alt="" />
                              <div className="ms-4">
                                <small className="text-light d-block mt-1">
                                  <strong>Informações Utilizador</strong>
                                </small>
                                <h3 className="text-light mb-0">@Username</h3>
                                <small className="text-light d-block mt-1 ">
                                  <i className="bi bi-star-half"></i> Perfil Administrativo
                                </small>
                                <small className="text-light d-block">Email:</small>
                                <small className="text-light d-block">Tel:. +244</small>
                              </div>
                            </div>
                            <div className="posiBtn">
                              <FormEditarAdministrativo />
                            </div>
                          </div>
                        </section>

                        <section className="col">
                          <div className="p-3 rounded-4 custom-funcionailidades text-light">
                            <i className="bi bi-person-fill-add custom-contentFuncionalidades mt-2 display-2"></i>
                            <h4 className="custom-contentFuncionalidades">Adicionar novo utilizador</h4>
                            <div className="d-flex justify-content-center align-items-center">
                              <button className="btn btn-light w-auto">Adicionar Utilizador</button>

                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    <TabelaClienteAdmin/>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  {/*-----------------------------------------------PROFISSIONAL------------------------------------------------ */}
                  <div className="Container UtilizadorProfissional">
                    <div className="container">
                      <div className="row">
                        <section className="col">
                          <div className="p-3 rounded-4 custom-funcionailidades text-light">
                            <i className="bi bi-person-fill-add custom-contentFuncionalidades mt-2 display-2"></i>
                            <h4 className="custom-contentFuncionalidades">Adicionar novo Profissional</h4>
                            <div className="d-flex justify-content-center align-items-center">
                              <FormCriarProfissional />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    <TabelaProfissionais/>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*----------------------------------- Conteúdo do componente 'Serviços'------------------------------------------- */}
          {currentTab === 'Servicos' && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>serviços</strong></h2>
              <div className="container">
                <div className="row">
                  <section className="col ">
                    <div className="p-3 rounded-4 text-light customServicos">
                      <i className="bi bi-bag-plus-fill custom-contentFuncionalidades mt-2 pb-1 display-2"></i>
                      <h4 className="custom-contentFuncionalidades">Adicionar novo servico</h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <FormCriarServico />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-5" />
             <TabelaServicos/>
            </div>
          )}
          {currentTab === 'Marcacao' && (
            <div>
              {/*-------------------------------------------Conteúdodocomponente'Marcação'------------------------------------ */}

              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>Marcação</strong></h2>
              <div className="container">
                <div className="row">
                  <section className="col ">
                    <div className="p-3 rounded-4 text-light customServicos">
                      <i class="bi bi-hourglass-split custom-contentFuncionalidades mt-2 pb-1 display-2"></i>
                      <h4 className="custom-contentFuncionalidades">Adicionar novo servico</h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <FormCarrinho />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-5" />
             <TabelaMarcacao/> 

            </div>
          )}
          {currentTab === 'Agenda' && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>Agenda</strong></h2>
              <h5 className="ms-2">ANO | <strong>2024</strong> </h5>
              <ul className="submenu nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true" > Jan
                  </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Fev
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Mar
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Abr
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Mai
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Jun
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Jul
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Ago
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Set
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Out
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Nov
                </button>
                </li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true"> Dez
                </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                  tabIndex="0" >
                  <div className="Container Meses">
                    {/*-----------------------------------TABELA DE MESES----------------------------------*/}
                    <div className="container mt-4">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Domingo</th>
                            <th>Segunda-Feira</th>
                            <th>Terça-Feira</th>
                            <th>Quarta-Feira</th>
                            <th>Quinta-Feira</th>
                            <th>Sexta-Feira</th>
                            <th>Sabádo</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>1º Sem</strong></td>
                            <td>Linha 1</td>
                            <td>Linha 1</td>
                            <td>Linha 1</td>
                            <td>Linha 1</td>
                            <td>Linha 1</td>
                            <td>Linha 1</td>
                            <td>Linha 1</td>

                          </tr>
                          <tr>
                            <td><strong>2º Sem</strong></td>
                            <td>Linha 2</td>
                            <td>Linha 2</td>
                            <td>Linha 2</td>
                            <td>Linha 2</td>
                            <td>Linha 2</td>
                            <td>Linha 2</td>
                            <td>Linha 2</td>
                          </tr>
                          <tr>
                            <td><strong>3º Sem</strong></td>
                            <td>Linha 3</td>
                            <td>Linha 3</td>
                            <td>Linha 3</td>
                            <td>Linha 3</td>
                            <td>Linha 3</td>
                            <td>Linha 3</td>
                            <td>Linha 3</td>
                          </tr>
                          <tr>
                            <td><strong>4º Sem </strong></td>
                            <td>Linha 4</td>
                            <td>Linha 4</td>
                            <td>Linha 4</td>
                            <td>Linha 4</td>
                            <td>Linha 4</td>
                            <td>Linha 4</td>
                            <td>Linha 4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*-----------------------------------LISTA DE MESES----------------------------------*/}
                    <hr className="mt-2" />
                    <div className="mt-3 ">
                      <h2> <i class="bi bi-people-fill"></i> Marcações</h2>
                      <div className="container mt-4">
                        <table className="table table-bordered">
                          <thead className="text-center">
                            <tr>
                              <th>ID</th>
                              <th>Data</th>
                              <th>Informações Servicos</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="d-flex justify-content-center mt-4"> 01</td>
                              <td className=" ">26/03/2024</td>
                              <td>
                                <ul>
                                  <li><strong>Cliente:</strong> Nunes</li>
                                  <li><strong>Servico:</strong> Corte de cabelo</li>
                                  <li><strong>Profissional:</strong> Luandina</li>
                                  <li><strong>Hora:</strong> 10:00</li>
                                </ul>
                              </td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === 'Progresso' && (
            <div>
              {/* Conteúdo do componente 'Progresso' */}
              <div>
                <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>Progresso</strong></h2>
                <ul className="submenu nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    > Serviços
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="true">
                      Profissionais
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabIndex="0" >
                    <div className="Container UtilizadorCliente">
                      <div className="container">
                        <div className="row">
                          <section className="col">
                            <div className="p-3 rounded-4 custom-funcionailidades">
                              <div className="d-flex align-items-center">
                               
                                <div className="ms-4">
                                  <small className="text-light d-block mt-1">
                                    <strong>SERVICOS</strong>
                                  </small>
                                  <small className="text-light d-block" >MAIS SOLICITADO</small>
                                  <h4 className="text-light d-block mt-2 ">
                                    <i className="bi bi-arrow-up text-success"></i> Massagem dipeladora
                                  </h4>
                                  
                                  <small className="text-light d-block mt-4" >MENOS SOLICITADO</small>
                                  <h4 className="text-light d-block mt-2 ">
                                    <i className="bi bi-arrow-down text-danger"></i> Tranças vermelhas
                                  </h4>
                                  
                                </div>
                              </div>
                             
                            </div>
                          </section>
                          <section className="col">
                            <div className="p-3 rounded-4 custom-funcionailidades">
                              <div className="d-flex align-items-center">
                               
                                <div className="ms-4">
                                  <small className="text-light d-block mt-1">
                                    <strong>CAIXA</strong>
                                  </small>
                                  <small className="text-light d-block" > <i className="bi bi-cash text-success"></i> Saldo diário - HOJE </small>
                                  <h6 className="text-light d-block mt-1 ">
                                     12.4000 AOA
                                  </h6>
                                  
                                  <small className="text-light d-block" > <i className="bi bi-cash text-success"></i> Saldo Mensal - AGO </small>
                                  <h6 className="text-light d-block mt-1 ">
                                     12.4000 AOA
                                  </h6>

                                                                    
                                </div>
                              </div>
                             
                            </div>
                          </section>

              
                        </div>
                      </div>
        
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    {/*-----------------------------------------------PROFISSIONAL------------------------------------------------ */}
                    <div className="Container UtilizadorProfissional">
                   
                      <div className="mt-2 ">
                        <h2 className="ms-3">Lista de Profissionais</h2>
                        <div className="container mt-4">
                          <table className="table table-dark table-hover">
                            <thead className="text-center">
                              <tr>
                                <th>Informações Serviços</th>
                                <th>Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>

                                <td>
                                  <ul>
                                    <li><strong>ID:</strong> 01</li>
                                    <li><strong>Nome:</strong> Nunes</li>
                                    <li><strong>Email:</strong> Nunes@Gmail.com</li>
                                    <li><strong>Telemovel:</strong> +244 923 456 345</li>
                                    <li><strong>BI:</strong> 098761234345</li>
                                    <li><strong>Username:</strong> Nunes10</li>
                                  </ul>
                                </td>
                                <td>
                                  <div className="row justify-content-center mt-5">
                                    <div className="col d-flex justify-content-center ">
                                      <i className="bi bi-pencil-square display-6"></i></div>
                                    <div className="col d-flex justify-content-center"><i className="bi bi-person-x display-6"></i></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Administrativo;


/*







*/