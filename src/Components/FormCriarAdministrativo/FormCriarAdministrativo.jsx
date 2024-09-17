import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

export default function FormCriarAdministrativo() {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telemovel: '',
        bi: '',
        username: '',
        password: '',
        confirmPassword: '',
        foto: ''
    });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === 'foto') {
            setFormData({
                ...formData,
                [id]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [id]: value
            });
        }
    };

    const validateForm = () => {
        let errors = {};
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Email inválido";
        }

        // Phone number validation
        const phoneRegex = /^9\d{8}$/;
        if (!phoneRegex.test(formData.telemovel)) {
            errors.telemovel = "Número de telefone inválido (deve começar com 9 e ter 9 dígitos)";
        }

        // BI validation
        const biRegex = /^(?=.*[A-Z].*[A-Z])(?=.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d).{13}$/;
        if (!biRegex.test(formData.bi)) {
            errors.bi = "BI inválido (deve ter 13 caracteres, incluindo 2 letras maiúsculas)";
        }

        // Password match validation
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "As senhas não coincidem";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            const formDataToSend = new FormData();
            formDataToSend.append('nomeCompleto', formData.nomeCompleto);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('telemovel', formData.telemovel);
            formDataToSend.append('bi', formData.bi);
            formDataToSend.append('username', formData.username);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('confirmPassword', formData.confirmPassword);
            formDataToSend.append('foto', formData.foto);
            formDataToSend.append('perfilId', 2); //IdUtilizador
            formDataToSend.append('activar', false); 
            formDataToSend.append('estadoUtilizador', false);

            try {
                const response = await axios.post('https://localhost:7262/api/Utilizador/CriarUtilizador', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Response:', response.data);
                handleClose();
                setShowAlert(true);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Conta criada com sucesso!
                </Alert>
            )}
            <Button variant="dark w-auto" onClick={handleShow}>
                Criar Conta
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Registar Utilizador</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="nomeCompleto" className="form-label">Nome Utilizador*</label>
                            <input type="text" className="form-control" id="nomeCompleto" placeholder="Nome Utilizador" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telemovel" className="form-label">Telemóvel*</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telemóvel" onChange={handleChange} />
                            {errors.telemovel && <div className="text-danger">{errors.telemovel}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bi" className="form-label">BI*</label>
                            <input type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" onChange={handleChange} />
                            {errors.bi && <div className="text-danger">{errors.bi}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="username" className="form-label">Username*</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foto" className="form-label">Foto*</label>
                            <input type="file" className="form-control" id="foto" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="confirmPassword" className="form-label">Confirmação Password*</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmação Password" onChange={handleChange} />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>
                        <div className="col-12 mt-3 d-flex justify-content-start">
                            <Button variant="dark" type="button" onClick={handleSubmit}>Registar</Button>
                            <Button variant="outline-dark" className="me-2 col-md-2" onClick={handleClose}>Cancelar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}