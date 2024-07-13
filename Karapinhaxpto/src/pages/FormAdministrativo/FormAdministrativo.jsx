import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './FormAdministrativo.css';

export default function FormAdministrativo() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeUtilizador: '',
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
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async () => {
        // Validar os campos aqui, se necessário
        try {
            const response = await axios.post('https://localhost:7262/api/Utilizador/CriarUtilizador', {
                nomeUtilizador: formData.nomeUtilizador,
                email: formData.email,
                telemovel: formData.telemovel,
                bi: formData.bi,
                username: formData.username,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                foto: formData.foto,
                perfilId: 1,
                activar: false,
                EstadoUtilizador: true   
            });
            console.log('Response:', response.data);
            handleClose(); // Fechar modal após submeter
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Button className=" btn btn-dark" onClick={handleShow}>
                Regista-se
            </Button>

            <Modal className="" show={showModal} onHide={handleClose} backdrop="static">
                <Modal.Header >
                    <Modal.Title>Karapinha XPTO<br /><h6>Registar Administrativo</h6> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3 ">
                        <div className="col-md-6">
                            <label htmlFor="nomeUtilizador" className="form-label">Nome Utilizador*</label>
                            <input className="form-control " id="nomeUtilizador" placeholder="Nome Utilizador" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="telemovel" className="form-label">Telemóvel</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telemóvel" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="bi" className="form-label">BI*</label>
                            <input type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="username" className="form-label">Username*</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="confirmPassword" className="form-label">Confirmação Password*</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmação Password" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="foto" className="form-label">Foto</label>
                            <input type="file" className="form-control" id="foto" onChange={handleChange} />
                        </div>
                        <div className=" mt-3 d-flex justify-content-start">
                            <Button className="btn btn-dark" type="button" onClick={handleSubmit}>Registar</Button>
                            <Button className="btn btn-outline-dark btn-light  me-2 col-md-3" onClick={handleClose}>Cancelar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
