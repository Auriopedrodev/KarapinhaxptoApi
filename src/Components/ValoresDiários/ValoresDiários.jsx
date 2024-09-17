import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ValoresDiários() {
  const [valorHoje, setValorHoje] = useState(0);
  const [valorOntem, setValorOntem] = useState(0);

  useEffect(() => {
    const fetchValores = async () => {
      try {
        const responseHoje = await axios.get("https://localhost:7262/api/Marcacao/GetFacturacaoDia");
        const responseOntem = await axios.get("https://localhost:7262/api/Marcacao/GetFacturacaoOntem");

        setValorHoje(responseHoje.data);
        setValorOntem(responseOntem.data);
      } catch (error) {
        console.error("Erro ao buscar os valores:", error);
      }
    };

    fetchValores();
  }, []);

  return (
    <div>
      <section className="col">
        <div className="p-3 rounded-4 custom-funcionailidades">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <h4 className="text-light d-block mt-1">
                <strong>CAIXA</strong>
              </h4>
              <small className="text-light d-block">
                <i className="bi bi-cash text-success"></i> Valor Facturado - HOJE
              </small>
              <h6 className="text-light d-block mt-1">{valorHoje} AOA</h6>

              <small className="text-light d-block">
                <i className="bi bi-cash text-success"></i> Valor Facturado - ONTEM
              </small>
              <h6 className="text-light d-block mt-1">{valorOntem} AOA</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
