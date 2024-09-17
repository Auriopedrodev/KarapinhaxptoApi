import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import '../TabelaUtilizador/TabelaUtilizador.css';

export default function TabelaActivarBloquearUtilizador() {
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('https://localhost:7262/api/Utilizador/ListarTodos')
            .then(response => {
                // Filtrar utilizadores com perfilId igual a 2
                const filteredUsers = response.data.filter(user => user.perfilId === 2);
                setEmployees(filteredUsers);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os utilizadores!", error);
            });
    };

    const handleActivateUser = (id) => {
        axios.put(`https://localhost:7262/api/Utilizador/AtivarUtilizador?id=${id}`)
            .then(response => {
                console.log("Utilizador ativado com sucesso!");
                setModalMessage("Utilizador ativado com sucesso!");
                setShowModal(true);
                fetchUsers();
            })
            .catch(error => {
                console.error("Houve um erro ao ativar o utilizador!", error);
                setModalMessage("Erro ao ativar o utilizador!");
                setShowModal(true);
            });
    };

    const handleBlockUser = (id, isBlocked) => {
        const action = isBlocked ? 'DesbloquearUtilizador' : 'BloquearUtilizador';
        axios.put(`https://localhost:7262/api/Utilizador/BloquearDesbloaquerUtilizador?id=${id}`)
            .then(response => {
                console.log("Utilizador bloqueado/desbloqueado com sucesso!");
                setModalMessage("Utilizador bloqueado/desbloqueado com sucesso!");
                setShowModal(true);
                fetchUsers();
            })
            .catch(error => {
                console.error("Houve um erro ao bloquear/desbloquear o utilizador!", error);
                setModalMessage("Erro ao bloquear/desbloquear o utilizador!");
                setShowModal(true);
            });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                                    <li><strong>Nome:</strong> {emp.nomeCompleto}</li>
                                    <li><strong>Email:</strong> {emp.email}</li>
                                    <li><strong>Telemóvel:</strong> {emp.telemovel}</li>
                                    <li><strong>BI:</strong> {emp.bi}</li>
                                    <li><strong>Username:</strong> {emp.userName}</li>
                                </ul>
                            </td>
                            <td>
                                <div className="row justify-content-center mt-5">
                                    <div className="col d-flex justify-content-center">
                                        <i className="bi bi-check2 text-success display-6" onClick={() => handleActivateUser(emp.id)}></i>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        {emp.activar && !emp.estadoUtilizador ? (
                                            <i className="bi bi-unlock custonUnlock display-6" onClick={() => handleBlockUser(emp.id, true)}></i>
                                        ) : (
                                            <i className="bi bi-lock text-danger display-6" onClick={() => handleBlockUser(emp.id, false)}></i>
                                        )}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Karapinha XPTO - AVISO</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}