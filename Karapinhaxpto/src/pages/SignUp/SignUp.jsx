import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './SignUp.css';

export default function SignUp() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telemovel: '',
        bi: '',
        username: '',
        password: '',
        confirmPassword: '',
        foto: null
    });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData({
            ...formData,
            [id]: files ? files[0] : value
        });
    };

    const handleSubmit = async () => {
        const data = new FormData();
        data.append('nomeCompleto', formData.nomeCompleto);
        data.append('email', formData.email);
        data.append('telemovel', formData.telemovel);
        data.append('bi', formData.bi);
        data.append('username', formData.username);
        data.append('password', formData.password);
        data.append('confirmPassword', formData.confirmPassword);
        if (formData.foto) {
            data.append('foto', formData.foto);
        }
        data.append('perfilId', 4);
        data.append('activar', false);
        data.append('estadoUtilizador', false);

        try {
            const response = await axios.post('/api/Utilizador/CriarUtilizador', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response:', response.data);
            handleClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Button variant="dark btn-sm w-100" onClick={handleShow}>
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
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telemovel" className="form-label">Telemóvel</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telemóvel" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bi" className="form-label">BI*</label>
                            <input type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="username" className="form-label">Username*</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foto" className="form-label">Foto</label>
                            <input type="file" className="form-control" id="foto" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="confirmPassword" className="form-label">Confirmação Password*</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmação Password" onChange={handleChange} />
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
