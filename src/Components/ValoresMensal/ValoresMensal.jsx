import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ValoresMensal() {
  const [valorMesCorrente, setValorMesCorrente] = useState(0);
  const [valorMesPassado, setValorMesPassado] = useState(0);

  useEffect(() => {
    const fetchValoresMensais = async () => {
      try {
        const responseMesCorrente = await axios.get("https://localhost:7262/api/Marcacao/GetFacturacaoMesCorrente");
        const responseMesPassado = await axios.get("https://localhost:7262/api/Marcacao/GetFacturacaoMesPassado");

        setValorMesCorrente(responseMesCorrente.data);
        setValorMesPassado(responseMesPassado.data);
      } catch (error) {
        console.error("Erro ao buscar os valores mensais:", error);
      }
    };

    fetchValoresMensais();
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
                <i className="bi bi-cash text-success"></i> Valor Facturado - MÊS CORRENTE
              </small>
              <h6 className="text-light d-block mt-1">{valorMesCorrente} AOA</h6>

              <small className="text-light d-block">
                <i className="bi bi-cash text-success"></i> Valor Facturado - MÊS PASSADO
              </small>
              <h6 className="text-light d-block mt-1">{valorMesPassado} AOA</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
