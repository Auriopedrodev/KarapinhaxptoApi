import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TabelaProfissionais() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7262/api/Profissional')
      .then(response => {
        setProfissionais(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados!', error);
      });
  }, []);

  return (
    <div className="mt-5">
      <h2>Lista de Profissionais</h2>
      <div className="container mt-4">
        <table className="table table-dark table-hover">
          <thead className="text-center">
            <tr>
              <th>Informações Profissionais</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {profissionais.map(profissional => (
              <tr key={profissional.id}>
                <td>
                  <ul>
                    <li><strong>Nome:</strong> {profissional.nome}</li>
                    <li><strong>Email:</strong> {profissional.email}</li>
                    <li><strong>Telemovel:</strong> {profissional.telemovel}</li>
                    <li><strong>BI:</strong> {profissional.bi}</li>
                    
                  </ul>
                </td>
                <td>
                  <div className="row justify-content-center mt-5">
                    <div className="col d-flex justify-content-center">
                      <i className="bi bi-pencil-square display-6"></i>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <i className="bi bi-person-x display-6"></i>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
