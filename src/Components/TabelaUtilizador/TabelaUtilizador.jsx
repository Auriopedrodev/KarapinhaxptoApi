import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TabelaUtilizador/TabelaUtilizador.css';

export default function TabelaUtilizador() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7262/api/Utilizador/ListarTodos')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the employees!", error);
            });
    }, []);

    return (
        <div>
            <h2>Funcionários</h2>
            <table className="table table-dark table-hover">
                <thead className="text-center">
                    <tr>
                        <th>Foto</th>
                        <th>Informações Serviços</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>
                                <img 
                                    className="imagemCliente" 
                                    src={`https://localhost:7262/${emp?.foto}`} 
                                    alt={emp.name} 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </td>
                            <td>
                                <ul>
                                    <li><strong>ID:</strong> {emp.id}</li>
                                    <li><strong>Nome:</strong> {emp.nomeCompleto}</li>
                                    <li><strong>Email:</strong> {emp.email}</li>
                                    <li><strong>Telemovel:</strong> {emp.telemovel}</li>
                                    <li><strong>BI:</strong> {emp.bi}</li>
                                    <li><strong>Username:</strong> {emp.usernName}</li>
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
    );
}
