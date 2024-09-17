import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import '../FormEditarAdministrativo/FormEditarAdministrativo.css';

export default function FormEditarAdministrativo() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telemovel: '',
        bi: '',
        username: '',
        password: '',
        foto: ''
    });

    useEffect(() => {
        // Busca o ID do usuário no localStorage
        const userId = localStorage.getItem('userId');

        // Função para buscar dados do usuário pelo ID
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://localhost:7262/api/Utilizador/listUtilizadorbyId/${userId}`);
                const userData = response.data;

                // Preenche o estado do formulário com os dados obtidos
                setFormData({
                    nomeCompleto: userData.nomeCompleto,
                    email: userData.email,
                    telemovel: userData.telemovel,
                    bi: userData.bi,
                    username: userData.username,
                    password: userData.password,
                    foto: userData.foto
                });
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };

        // Verifica se há um ID de usuário no localStorage e busca os dados se existir
        if (userId) {
            fetchUserData();
        }
    }, []);

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
        try {
            const response = await axios.post('https://localhost:7262/api/Utilizador', {
                nomeCompleto: formData.nomeCompleto,
                email: formData.email,
                telemovel: formData.telemovel,
                bi: formData.bi,
                username: formData.username,
                password: formData.password,
                foto: formData.foto,
                perfilId: 4,
                activar: false,
                estadoUtilizador: false
            });
            console.log('Response:', response.data);
            handleClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Button variant="dark w-auto" onClick={handleShow}>
                Editar
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Editar Utilizador</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="nomeCompleto" className="form-label">Nome Utilizador*</label>
                            <input type="text" className="form-control" id="nomeCompleto" placeholder="Nome Utilizador" value={formData.nomeCompleto} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telemovel" className="form-label">Telemóvel</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telemóvel" value={formData.telemovel} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bi" className="form-label">BI*</label>
                            <input type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" value={formData.bi} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="username" className="form-label">Username*</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foto" className="form-label">Foto</label>
                            <input type="file" className="form-control" id="foto" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
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
