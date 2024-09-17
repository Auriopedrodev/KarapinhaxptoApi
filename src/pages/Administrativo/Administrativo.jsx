import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./sidebars.css";
import "./sidebars.js";
import "./Administrativo.css";
import { kpxE, sanguita1 } from "../../Components/imagens.jsx";
import FormEditarAdministrativo from "../../Components/FormEditarAdministrativo/FormEditarAdministrativo.jsx";
import FormCriarProfissional from "../../Components/FormCriarProfissional/FormCriarProfissional.jsx";
import FormCriarServico from "../../Components/FormCriarServico/FormCriarServico.jsx";

import TabelaClienteAdmin from "../../Components/TabelaClientesAdmin/TabelaClienteAdmin.jsx";
import TabelaProfissionais from "../../Components/TabelaProfissionais/TabelaProfissionais.jsx";
import TabelaServicos from "../../Components/TabelaServicos/TabelaServicos.jsx";
import FormCarrinho from "../../Components/FormCarrinho/FormCarrinho.jsx";
import TabelaMarcacao from "../../Components/TabelaMarcacao/TabelaMarcacao.jsx";
import FormCategoria from "../../Components/FormCategoria/FormCategoria.jsx";
import ListaMarcacoesMensal from "../../Components/ListaMarcacoesMensal/ListaMarcacoesMensal.jsx";
import Meses from "../../Components/Meses.jsx";
import InfoAdministrativo from "../../Components/InfoAdministrativo/InfoAdministrativo.jsx";
import TabelaCategoria from "../../Components/TabelaCategoria/TabelaCategoria.jsx";
import ServicoMaisMenos from "../../Components/ServicoMaisMenos/ServicoMaisMenos.jsx";
import ValoresMensal from "../../Components/ValoresMensal/ValoresMensal.jsx";
import ValoresDiários from "../../Components/ValoresDiários/ValoresDiários.jsx";
import Top5Profissionais from "../../Components/Top5Profissionais/Top5Profissionais.jsx";

const Administrativo = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("Utilizador");
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem("id");
      if (userId) {
        try {
          const response = await axios.get(
            `https://localhost:7262/api/Utilizador/listUtilizadorbyId?id=${userId}`
          );
          setUserInfo(response.data);
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      }
    };

    fetchUserInfo();
  }, []);

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 sidebar ">
          <div className="menu">
            <div>
              <img className="logoAdministrativo" src={kpxE} alt="" />
            </div>
            <button
              className={`w-75 btn ${
                currentTab === "Utilizador" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Utilizador")}
            >
              <i className="bi bi-person-fill"></i> Utilizador
            </button>
            <button
              className={`w-75 btn ${
                currentTab === "Servicos" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Servicos")}
            >
              <i className="bi bi-bag-fill"></i> Serviços
            </button>
            <button
              className={`w-75 btn ${
                currentTab === "Marcacao" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Marcacao")}
            >
              <i className="bi bi-cart-fill"></i> Marcação
            </button>
            <button
              className={`w-75 btn ${
                currentTab === "Agenda" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Agenda")}
            >
              <i className="bi bi-calendar-fill"></i> Agenda
            </button>
            <button
              className={` w-75 btn ${
                currentTab === "Progresso" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Progresso")}
            >
              <i className="bi bi-graph-up-arrow"></i> Progresso
            </button>
            <button
              className={` w-75 btn ${
                currentTab === "Categoria" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Categoria")}
            >
              <i className="bi bi-inbox-fill "></i> Categoria
            </button>
            <button
              className="btn btn-outline-danger mt-2 align-self-start w-auto"
              onClick={handleLogout}
            >
              Sair da conta
            </button>
          </div>
        </div>

        <div className="col-10 content p-4">
          {currentTab === "Utilizador" && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">
                KARAPINHA XPTO | <strong>utilizadores</strong>
              </h2>
              <ul
                className="submenu nav nav-pills"
                id="pills-tab"
                role="tablist"
              >
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
                  >
                    {" "}
                    Conta
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
                    aria-selected="true"
                  >
                    Gerir Profissionais
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex="0"
                >
                  <div className="Container UtilizadorCliente">
                    <div className="container">
                      <div className="row">
                        <section className="col">
                          <div className="p-3 rounded-4 custom-funcionailidades text-light">
                            <div className="d-flex align-items-start">
                              <img
                                className="imagemAdmin me-3"
                                src={`https://localhost:7262/${userInfo?.foto}`} 
                                alt=""
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "cover",
                                }}
                              />
                              <div>
                                <small className="text-light d-block">
                                  <strong>Informações Utilizador</strong>
                                </small>
                                <h3 className="text-light mb-2">
                                  Username:{" "}
                                  {userInfo?.userName || "Carregando..."}
                                </h3>
                                <small className="text-light d-block">
                                  <i className="bi bi-star-fill"></i>
                                  <strong> Perfil Administrativo</strong>
                                </small>
                                <small className="text-light d-block">
                                  Email: {userInfo?.email || "Carregando..."}
                                </small>
                                <small className="text-light d-block">
                                  Telefone:{" "}
                                  {userInfo?.telemovel || "Carregando..."}
                                </small>
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
                  <div className="Container UtilizadorProfissional">
                    <div className="container">
                      <div className="row">
                        <section className="col">
                          <div className="p-3 rounded-4 custom-funcionailidades text-light">
                            <i className="bi bi-person-fill-add custom-contentFuncionalidades mt-2 display-2"></i>
                            <h4 className="custom-contentFuncionalidades">
                              Adicionar novo Profissional
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                              <FormCriarProfissional />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    <TabelaProfissionais />
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === "Servicos" && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">
                KARAPINHA XPTO | <strong>serviços</strong>
              </h2>
              <div className="container">
                <div className="row">
                  <section className="col ">
                    <div className="p-3 rounded-4 text-light customServicos">
                      <i className="bi bi-bag-plus-fill custom-contentFuncionalidades mt-2 pb-1 display-2"></i>
                      <h4 className="custom-contentFuncionalidades">
                        Adicionar novo servico
                      </h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <FormCriarServico />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-5" />
              <TabelaServicos />
            </div>
          )}
          {currentTab === "Marcacao" && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">
                KARAPINHA XPTO | <strong>Marcação</strong>
              </h2>

              <TabelaMarcacao />
            </div>
          )}
          {currentTab === "Agenda" && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">
                KARAPINHA XPTO | <strong>Agenda</strong>
              </h2>
              <h5 className="ms-2">
                ANO | <strong>2024</strong>{" "}
              </h5>

              <Meses />
            </div>
          )}
          {currentTab === "Progresso" && (
            <div>
              <div>
                <h2 className="ms-2 mt-4 mb-3">
                  KARAPINHA XPTO | <strong>Progresso</strong>
                </h2>
                <ul
                  className="submenu nav nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
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
                    >
                      {" "}
                      Serviços
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
                      aria-selected="true"
                    >
                      Profissionais
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex="0"
                  >
                    <div className="Container UtilizadorCliente">
                      <div className="container">
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <section className="mb-2 flex-fill">
                              <ServicoMaisMenos />
                            </section>
                            <section className="mb-2 flex-fill mx-2">
                              <ValoresDiários />
                            </section>
                          </div>
                          <section className="mb-2">
                            <ValoresMensal />
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
                    <Top5Profissionais />
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === "Categoria" && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">
                KARAPINHA XPTO | <strong>Categoria</strong>
              </h2>
              <h5 className="ms-2">
                ANO | <strong>2024</strong>{" "}
              </h5>
              <section className="col ">
                <div className="p-3 rounded-4 text-light customServicos">
                  <i className="bi bi-inbox-fill custom-contentFuncionalidades mt-2 pb-1 display-2"></i>

                  <h4 className="custom-contentFuncionalidades">
                    Adicionar Categoria
                  </h4>
                  <div className="d-flex justify-content-center align-items-center">
                    <FormCategoria />
                  </div>
                </div>
              </section>
              <TabelaCategoria />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Administrativo;
