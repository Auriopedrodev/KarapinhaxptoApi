import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { sanguita1 } from '../../Components/imagens.jsx';
import '../TabelaClientesAdmin/TabelaClienteAdmin.css';

export default function TabelaClienteAdmin() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7262/api/Utilizador')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados!', error);
      });
  }, []);

  return (
    <div>
      <div className="mt-3">
        <h2><i className="bi bi-people-fill"></i> Lista de clientes</h2>
        <div className="container mt-1">
          <table className="table table-bordered table-custom table-sm">
            <thead className="text-center">
              <tr>
                <th>Foto</th>
                <th>Informações Serviços</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td className="d-flex justify-content-center">
                    <img src={`https://localhost:7262/${cliente?.foto}`} className="rounded-circle" alt="Cliente" />
                  </td>
                  <td>
                    <ul>
                      <li><strong>ID:</strong> {cliente.id}</li>
                      <li><strong>Nome:</strong> {cliente.nome}</li>
                      <li><strong>Email:</strong> {cliente.email}</li>
                      <li><strong>Telemovel:</strong> {cliente.telemovel}</li>
                      <li><strong>BI:</strong> {cliente.bi}</li>
                      <li><strong>Username:</strong> {cliente.username}</li>
                    </ul>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-around">
                      <i className="bi bi-pencil-square iconesEditarRemover"></i>
                      <i className="bi bi-person-x iconesEditarRemover"></i>
                    </div>
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
