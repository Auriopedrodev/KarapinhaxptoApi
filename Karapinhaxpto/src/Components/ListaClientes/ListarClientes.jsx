import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ListaClientes/ListarClientes.css';  
export default function ListaClientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Utilizador/GetAllClientes');
                setClientes(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching clientes', error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <div>
            {clientes.map((cliente, index) => (
                <div key={index}>
                    <p>Nome: {cliente.nomeUtilizador}</p>
                    <p>Email: {cliente.emailUtilizador}</p>
                    <p>Bilhete: {cliente.bilheteUtilizador}</p>
                    <p>Username: {cliente.usernameUtilizador}</p>
                    <p>Estado: {cliente.estado}</p>
                </div>
            ))}
        </div>
    );
}
