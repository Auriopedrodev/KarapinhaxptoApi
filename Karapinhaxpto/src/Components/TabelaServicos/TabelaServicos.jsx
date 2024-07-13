import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TabelaServicos() {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Servico');
                setServicos(response.data); // Assume que a resposta contém um array de objetos de serviços
            } catch (error) {
                console.error('Erro ao buscar serviços:', error);
            }
        };

        fetchServicos();
    }, []); // Executa uma vez quando o componente monta

    return (
        <div>
            <div className="mt-5">
                <h2><i className="bi bi-bag-fill"></i> Lista de Serviços</h2>
                <div className="container mt-4">
                    <table className="table table-dark table-hover">
                        <thead className="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Categoria</th>
                                <th>Tipo</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicos.map(servico => (
                                <tr key={servico.id}>
                                    <td>{servico.id}</td>
                                    <td>{servico.categoriaId}</td>
                                    <td>{servico.tipoServico}</td>
                                    <td>{servico.precoServico}</td>
                                    <td>
                                        <div className="row justify-content-center">
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
        </div>
    );
}
