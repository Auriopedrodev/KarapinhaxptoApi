import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import '../TabelaMarcacao/TabelaMarcacao.css';

export default function TabelaMarcacao() {
    const [marcacoes, setMarcacoes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMarcacao, setSelectedMarcacao] = useState(null);

    const fetchUtilizadorDetails = async (utilizadorId) => {
        try {
            const response = await axios.get(`https://localhost:7262/api/Utilizador/listUtilizadorbyId?id=${utilizadorId}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar detalhes do utilizador:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchMarcacoes = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Marcacao');
                const marcacoesData = response.data;
                
                const marcacoesComUtilizador = await Promise.all(
                    marcacoesData.map(async (marcacao) => {
                        const utilizador = await fetchUtilizadorDetails(marcacao.utilizadorId);
                        return { ...marcacao, utilizador };
                    })
                );

                setMarcacoes(marcacoesComUtilizador);
            } catch (error) {
                console.error('Erro ao buscar marcações:', error);
            }
        };

        fetchMarcacoes();
    }, []);

    const confirmarMarcacao = async (id) => {
        try {
            await axios.put(`https://localhost:7262/api/Marcacao/confirmarMarcacao?id=${id}`);
            setMarcacoes(marcacoes.map(marcacao =>
                marcacao.id === id
                    ? { ...marcacao, estadoMarcacao: true }
                    : marcacao
            ));
        } catch (error) {
            console.error('Erro ao confirmar marcação:', error);
        }
    };

    const handleShowModal = (marcacao) => {
        setSelectedMarcacao(marcacao);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMarcacao(null);
    };

    return (    
        <div className="mt-5 customTabelaMarcacao">
            <h2><i className="bi bi-cart4"></i> Listas de Marcações</h2>
            <div className="container mt-4">
                <table className="table table-dark custonTale table-hover">
                    <thead className="text-center">
                        <tr>
                            <th>Informações Marcação</th>
                            <th>Detalhes</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marcacoes.map((marcacao) => (
                            <tr key={marcacao.id}>
                                <td>
                                    <ul>
                                        <li><strong>Nome Completo:</strong> {marcacao.utilizador ? marcacao.utilizador.nomeCompleto : 'Carregando...'}</li>
                                        <li><strong>Data Fatura:</strong> {new Date(marcacao.dataRegistoMarcacao).toLocaleDateString()}</li>
                                        <li><strong>Hora :</strong> {new Date(marcacao.dataRegistoMarcacao).toLocaleTimeString()}</li>
                                        <li><strong>Total:</strong> {marcacao.pagamento} AOA</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <button className="btn bg-light w-auto buttonServicos" onClick={() => handleShowModal(marcacao)}>Ver Servicos</button>
                                    </ul>
                                </td>
                                <td>
                                    <div className="row justify-content-center mt-5">
                                        <div className="col d-flex justify-content-center ">
                                            {marcacao.estadoMarcacao ? (
                                                <i className="bi bi-check2-all text-success display-6"></i>
                                            ) : (
                                                <i
                                                    className="bi bi-check2 custonUnlock display-6"
                                                    onClick={() => confirmarMarcacao(marcacao.id)}
                                                    style={{ cursor: 'pointer' }}
                                                ></i>
                                            )}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes dos Serviços</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMarcacao && (
                        <div>
                            <p><strong>Cliente:</strong> {selectedMarcacao.utilizador?.nomeCompleto}</p>
                            <p><strong>Data:</strong> {new Date(selectedMarcacao.dataRegistoMarcacao).toLocaleString()}</p>
                            <p><strong>Total:</strong> {selectedMarcacao.pagamento} AOA</p>
                            {/* Aqui você pode adicionar mais detalhes dos serviços */}
                            <p>Detalhes dos serviços irão aqui...</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}