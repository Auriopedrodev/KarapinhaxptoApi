import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function FormValidacaoPassword() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        actualPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleClose = () => setShowModal(false);
    const handleShow = () => {
        setError('');
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async () => {
        setError('');
        
        const userId = localStorage.getItem('id');
        console.log(userId);
        
        if (formData.newPassword !== formData.confirmPassword) {
            setError('A nova palavra-passe e a confirmação não coincidem.');
            return;
        }

        try {
            const response = await axios.put('https://localhost:7262/api/Utilizador/AlterarPassword', {
                password: formData.newPassword,
                id: userId,
                passwordAntiga: formData.actualPassword
            });
            console.log('Palavra-passe alterada com sucesso:', response.data);
            handleClose();
            navigate('/administrativo')
        } catch (error) {
            console.error('Erro ao alterar a palavra-passe:', error);
            setError('Erro ao alterar a palavra-passe. Tente novamente mais tarde.');
        }
    };

    return (
        <div>
            <Button variant="light w-auto" onClick={handleShow}>
                Alterar Palavra-passe
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Alterar Palavra-passe</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="actualPassword" className="form-label">Palavra-passe atual</label>
                            <input type="password" className="form-control" id="actualPassword" placeholder="Palavra-passe atual" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="newPassword" className="form-label">Nova palavra-passe</label>
                            <input type="password" className="form-control" id="newPassword" placeholder="Nova Palavra-passe" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="confirmPassword" className="form-label">Confirmar nova palavra-passe</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmar nova palavra-passe" onChange={handleChange} />
                        </div>
                       
                        <div className="col-12 mt-3 d-flex justify-content-start">
                            <Button variant="dark" type="button" onClick={handleSubmit}>Alterar</Button>
                            <Button variant="outline-dark" className="me-2 col-md-2" onClick={handleClose}>Cancelar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
