import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import '../TabelaMarcacao/TabelaMarcacao.css';

export default function TabelaMarcacaoServicos() {
    const [marcacoes, setMarcacoes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMarcacao, setSelectedMarcacao] = useState(null);
    const [servicos, setServicos] = useState([]);
    const [showServicoModal, setShowServicoModal] = useState(false);
    const [selectedServico, setSelectedServico] = useState(null);
    const [novaData, setNovaData] = useState('');

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

    const handleShowModal = async (marcacao) => {
        setSelectedMarcacao(marcacao);
        try {
            const response = await axios.get(`https://localhost:7262/api/MarcacaoServico?marcacaoId=${marcacao.id}`);
            setServicos(response.data);
        } catch (error) {
            console.error('Erro ao buscar serviços da marcação:', error);
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMarcacao(null);
        setServicos([]);
    };

    const handleShowServicoModal = (servico) => {
        setSelectedServico(servico);
        setShowServicoModal(true);
    };

    const handleCloseServicoModal = () => {
        setShowServicoModal(false);
        setSelectedServico(null);
        setNovaData('');
    };

    const handleReagendar = async () => {
        try {
            await axios.put('https://localhost:7262/api/Marcacao/ReagendarMarcacaoServico', {
                idMarcacao: selectedServico.marcacaoId,
                idServico: selectedServico.servicoId,
                dataMarcacaoServico: novaData
            });
            // Atualizar a lista de serviços ou marcações conforme necessário
            handleCloseServicoModal();
        } catch (error) {
            console.error('Erro ao reagendar serviço:', error);
        }
    };

    const handleCancelar = async () => {
        try {
            await axios.delete(`https://localhost:7262/api/MarcacaoServico/${selectedServico.id}`);
            // Atualizar a lista de serviços ou marcações conforme necessário
            handleCloseServicoModal();
        } catch (error) {
            console.error('Erro ao cancelar serviço:', error);
        }
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
                    <Modal.Title>Serviços da Marcação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMarcacao && (
                        <div>
                            <p><strong>ID da Marcação:</strong> {selectedMarcacao.id}</p>
                            <ul>
                                {servicos.map(servico => (
                                    <li key={servico.id} className="mb-3">
                                        <p><strong>Serviço ID:</strong> {servico.servicoId}</p>
                                        <p><strong>Categoria ID:</strong> {servico.categoriaId}</p>
                                        <p><strong>Profissional ID:</strong> {servico.profissionalId}</p>
                                        <p><strong>Data da Marcação:</strong> {new Date(servico.dataMarcacaoServico).toLocaleString()}</p>
                                        <p><strong>Hora:</strong> {servico.hora}</p>
                                        <Button variant="dark w-auto" onClick={() => handleShowServicoModal(servico)}>Ação</Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark w-auto" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showServicoModal} onHide={handleCloseServicoModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Reagendar ou Cancelar Serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedServico && (
                        <Form>
                            <Form.Group controlId="formNovaData">
                                <Form.Label>Nova Data</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    value={novaData}
                                    onChange={(e) => setNovaData(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="dark w-auto" onClick={handleReagendar}>
                        Reagendar Serviço
                    </Button>
                    <Button variant="btn btn-outline-dark w-auto" onClick={handleCloseServicoModal}>
                        Fechar
                    </Button>
                    <Button variant="danger w-auto" onClick={handleCancelar}>
                        Cancelar Serviço
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
