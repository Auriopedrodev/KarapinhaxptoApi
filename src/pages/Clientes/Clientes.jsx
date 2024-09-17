import React, { useState, useEffect } from 'react';
import '../Administrativo/sidebars.js';
import '../Administrativo/sidebars.css';
import '../Administrativo/Administrativo.css';
import { kpxE } from '../../Components/imagens.jsx';
import PerfilUtilizador from '../../Components/PerfilUtilizador/PerfilUtilizador.jsx';
import ServicosCliente from '../../Components/ServicosCliente/ServicosCliente.jsx';
import TabelaMarcacao from '../../Components/TabelaMarcacao/TabelaMarcacao.jsx';
import './Clientes.css';
import HomeCliente from '../../Components/HomeCliente/HomeCliente.jsx';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import TabelaMarcacaoServicos from '../../Components/TabelaMarcacaoServicos/TabelaMarcacaoServicos.jsx';

const Clientes = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const navigate = useNavigate(); // Inicialize useNavigate
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === 'http://localhost:5174/login') {
      navigate('/clientes'); // Redirecione de /login para /clientes
    }
  }, [navigate]);

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const handleLogout = () => {
    localStorage.removeItem('id'); // Remove the user ID from localStorage
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 sidebar">
          <div>
            <img className="locoCliente" src={kpxE} alt="" />
          </div>
          <div className="menuCliente">
            <button
              className={`w-75 btn ${currentTab === 'Home' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Home')}
            ><i className="bi bi-newspaper"></i> Home
            </button>
            <button
              className={`w-75 btn ${currentTab === 'Servicos' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Servicos')}
            ><i className="bi bi-bag-fill"></i> Serviços
            </button>
            <button
              className={`w-75 btn ${currentTab === 'Marcacao' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Marcacao')}
            ><i className="bi bi-cart-fill"></i> Marcação
            </button>
            <button
              className={`w-75 btn ${currentTab === 'Conta' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => handleTabClick('Conta')}
            ><i className="bi bi-person-circle"></i> Conta
            </button>
            <button
              className="w-75 btn btn-outline-danger"
              onClick={handleLogout}
            ><i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </div>
        </div>

        <div className="col-10 content p-4">
          {currentTab === 'Home' && (
            <div>
              <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <h3>KARAPINHA XPTO | <strong>Portal</strong> </h3>
              </div>
              <HomeCliente />
            </div>
          )}
          {/*----------------------------------- Conteúdo do componente 'Serviços'------------------------------------------- */}
          {currentTab === 'Servicos' && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>Meus Servicos</strong></h2>
              <ServicosCliente />
            </div>
          )}
          {currentTab === 'Marcacao' && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>Minhas Marcações</strong></h2>
              <TabelaMarcacaoServicos />
            </div>
          )}
          {currentTab === 'Conta' && (
            <div>
              <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>Meu Perfil</strong></h2>
              <div className="d-flex justify-content-center align-items-center">
                <PerfilUtilizador />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
