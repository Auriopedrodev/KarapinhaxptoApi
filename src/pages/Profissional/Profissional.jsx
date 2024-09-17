import React, { useState } from "react";
import { kpxE, sanguita1 } from "../../Components/imagens.jsx";
import FormCriarProfissional from "../../Components/FormCriarProfissional/FormCriarProfissional.jsx";
import TabelaClienteAdmin from "../../Components/TabelaClientesAdmin/TabelaClienteAdmin.jsx";
import TabelaProfissionais from "../../Components/TabelaProfissionais/TabelaProfissionais.jsx";
import FormCarrinho from "../../Components/FormCarrinho/FormCarrinho.jsx";
import TabelaMarcacao from "../../Components/TabelaMarcacao/TabelaMarcacao.jsx";
import Meses from "../../Components/Meses.jsx";
import "../Administrativo/sidebars.js";
import "../Administrativo/sidebars.css";
import "../Administrativo/Administrativo.css";
import TabelaMarcacaoProfissional from "../../Components/TabelaMarcacaoProfissional/TabelaMarcacaoProfissional.jsx";
import FormMarcacaoProfissional from "../../Components/FormMarcacaoProfissional/FormMarcacaoProfissional.jsx";
import { useNavigate } from 'react-router-dom'; 

const Profissional = () => {
  const [currentTab, setCurrentTab] = useState("Profissional");
  const navigate = useNavigate(); 
  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const handleLogout = () => {
    localStorage.removeItem('id'); // Remove the user ID from localStorage
    navigate('/login'); // Redirect to the home page
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 sidebar ">
          <div className="menu">
            <div>
              <img class="logoAdministrativo" src={kpxE} alt="" />
            </div>
      
            <button
              className={`w-75 btn ${
                currentTab === "Marcacao" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Marcacao")}
            >
              <i class="bi bi-cart-fill"></i> Marcação
            </button>
            <button
              className={`w-75 btn ${
                currentTab === "Agenda" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleTabClick("Agenda")}
            >
              <i class="bi bi-calendar-fill"></i> Agenda
            </button>
            <button
              className="w-75 btn btn-outline-danger"
              onClick={handleLogout}
            ><i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </div>
        </div>

        <div className="col-10 content p-4">
         
         
          {currentTab === "Marcacao" && (
            <div>
              {/*-------------------------------------------Conteúdodocomponente'Marcação'------------------------------------ */}

              <h2 className="ms-2 mt-4 mb-3">
                KARAPINHA XPTO | <strong>Marcação</strong>
              </h2>
              <div className="container">
                <div className="row">
                  <section className="col ">
                    <div className="p-3 rounded-4 text-light customServicos">
                      <i class="bi bi-hourglass-split custom-contentFuncionalidades mt-2 pb-1 display-2"></i>
                      <h4 className="custom-contentFuncionalidades">
                        Adicionar novo servico
                      </h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <FormMarcacaoProfissional />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-5" />
              <TabelaMarcacaoProfissional />
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
        </div>
      </div>
    </div>
  );
};

export default Profissional;
