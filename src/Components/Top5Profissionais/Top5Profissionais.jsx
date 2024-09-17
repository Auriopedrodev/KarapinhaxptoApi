import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Top5Profissionais() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    const fetchTop5Profissionais = async () => {
      try {
        const response = await axios.get("https://localhost:7262/api/Profissional/GetTop5Profissionais");
        setProfissionais(response.data);
      } catch (error) {
        console.error("Erro ao buscar os profissionais:", error);
      }
    };

    fetchTop5Profissionais();
  }, []);

  return (
    <div className="Container UtilizadorProfissional">
      <div className="mt-2">
        <h2 className="ms-3">TOP 5 Profissionais Mais Solicitados</h2>
        <div className="container mt-4">
          <table className="table table-dark table-hover">
            <thead className="text-center">
              <tr>
                <th>Informações Profissionais</th>
              </tr>
            </thead>
            <tbody>
              {profissionais.map((profissional) => (
                <tr key={profissional.id}>
                  <td>
                    <ul>
                      <li>
                        <strong>ID:</strong> {profissional.id}
                      </li>
                      <li>
                        <strong>Nome:</strong> {profissional.nomeCompleto}
                      </li>
                      <li>
                        <strong>Email:</strong> {profissional.email}
                      </li>
                      <li>
                        <strong>Telemovel:</strong> {profissional.telemovel}
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
