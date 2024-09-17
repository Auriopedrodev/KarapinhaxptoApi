import React, { useEffect, useState } from "react";


export default function InfoAdministrativo() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    telefone: "",
    id:""
  });

  useEffect(() => {
    // Função para buscar dados do Local Storage
    const fetchUserInfo = () => {
      const userData = JSON.parse(localStorage.getItem("userData")); // Assumindo que os dados estejam armazenados como JSON no Local Storage
      if (userData) {
        setUserInfo({  
          username: userData.username,
          email: userData.email,
          telefone: userData.telefone,
          id: userData.Id
        });
      }
    };

    fetchUserInfo();
  }, []); // Executa apenas uma vez ao carregar o componente

  return (
    <div>
      <section className="col">
        <div className="p-3 rounded-4 custom-funcionailidades">
          <div className="d-flex align-items-center">
            <img className="imagemUtilizador" src={userInfo.foto} alt="" />
            <div className="ms-4">
              <small className="text-light d-block mt-1">
                <strong>Informações Utilizador</strong>
              </small>
              <h3 className="text-light mb-0">@{userInfo.username}</h3>
              <small className="text-light d-block mt-1 ">
                <i className="bi bi-star-half"></i> Perfil Cliente
              </small>
              <small className="text-light d-block">Email: {userInfo.email}</small>
              <small className="text-light d-block">Tel:. +244 {userInfo.telefone}</small>
            </div>
          </div>
          <div className="posiBtn">
            {/* Componente para editar informações administrativas */}
             <FormEditarAdministrativo /> 
          </div>
        </div>
      </section>
    </div>
  );
}
