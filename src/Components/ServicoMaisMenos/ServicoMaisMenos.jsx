import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ServicoMaisMenos() {
  const [maisSolicitado, setMaisSolicitado] = useState("");
  const [menosSolicitado, setMenosSolicitado] = useState("");

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const responseMaisSolicitado = await axios.get("https://localhost:7262/api/Servico/ServicoMaisSolicitados");
        const responseMenosSolicitado = await axios.get("https://localhost:7262/api/Servico/ServicoMenosSolicitados");

        setMaisSolicitado(responseMaisSolicitado.data.tipoServico);
        setMenosSolicitado(responseMenosSolicitado.data.tipoServico);
      } catch (error) {
        console.error("Erro ao buscar os serviços:", error);
      }
    };

    fetchDados();
  }, []);

  return (
    <div>
      <section className="col">
        <div className="p-3 rounded-4 custom-funcionailidades">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <small className="text-light d-block mt-1">
                <strong>SERVIÇOS</strong>
              </small>
              <small className="text-light d-block">MAIS SOLICITADO</small>
              <h4 className="text-light d-block mt-2 ">
                <i className="bi bi-arrow-up text-success"></i> TipoServico: {maisSolicitado}
              </h4>

              <small className="text-light d-block mt-4">
                MENOS SOLICITADO
              </small>
              <h4 className="text-light d-block mt-2 ">
                <i className="bi bi-arrow-down text-danger"></i> TipoServico: {menosSolicitado}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
