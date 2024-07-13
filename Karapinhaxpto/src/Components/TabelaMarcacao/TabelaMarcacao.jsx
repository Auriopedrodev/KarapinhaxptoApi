import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TabelaMarcacao/TabelaMarcacao.css';

export default function TabelaMarcacao() {
    const [marcacoes, setMarcacoes] = useState([]);

    useEffect(() => {
        const fetchMarcacoes = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Marcacao');
                setMarcacoes(response.data); // Assumindo que a API retorna um array de marcações
            } catch (error) {
                console.error('Erro ao buscar marcações:', error);
            }
        };

        fetchMarcacoes();
    }, []);

    return (    
        <div className="mt-5 customTabelaMarcacao">
            <h2><i className="bi bi-bag-fill"></i> Marcações</h2>
            <div className="container mt-4">
                <table className="table table-dark table-hover">
                    <thead className="text-center">
                        <tr>
                            <th>Informações Marcação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marcacoes.map((marcacao) => (
                            <tr key={marcacao.id}>
                                <td>
                                    <ul>
                                        <li><strong>ID:</strong> {marcacao.id}</li>
                                        <li><strong>dataRegistoMarcacao:</strong> {marcacao.dataRegistoMarcacao}</li>
                                        <li><strong>pagamento:</strong> {marcacao.pagamento}</li>
                                        <li><strong>estadoMarcacao:</strong> {marcacao.estadoMarcacao}</li>
                                        <li><strong>utilizadorId:</strong> {marcacao.utilizadorId}</li>
                                        <li><strong>listaMarcacaoServico:</strong> {marcacao.listaMarcacaoServico}</li>
                                    </ul>
                                </td>
                                <td>
                                    <div className="row justify-content-center mt-5">
                                        <div className="col d-flex justify-content-center ">
                                            <i className="bi bi-check2 text-success display-6"></i>
                                        </div>
                                        <div className="col d-flex justify-content-center"><i className="bi bi-lock text-danger display-6"></i></div>
                                        <div className="col d-flex justify-content-center"><i className="bi bi-unlock custonUnlock display-6"></i></div>
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
