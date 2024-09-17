import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import '../FormEditarUtilizador/FormEditarUtilizador.css';

export default function FormEditarUtilizador({props, fetch}) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeCompleto: props.nomeCompleto,
        email: props.email,
        telemovel: props.telemovel,
        bi: props.bi,
        userName: props.userName,
        password: props.password,
        confirmPassword: props.password,
        foto: props.foto,
    });

console.log('valors:', props);
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

    const handleSubmit = async () => {
        // Validar os campos aqui, se necessário
        try {
            const response = await axios.put('https://localhost:7262/api/Utilizador/ActualizarUtilizador', {
                id: props.id,
                nomeCompleto: formData.nomeCompleto,
                email: formData.email,
                telemovel: formData.telemovel,
                bi: formData.bi,
                userName: formData.userName,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                foto: formData.foto,
                perfilId: 3, //IdUtilizador
                activar: true, 
                estadoUtilizador: false,
                validade: true
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
            console.log('Response:', response);
            fetch(); // Recarregar a lista após editar
            handleClose(); // Fechar modal após submeter
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
                <Modal.Header >
                    <Modal.Title>Karapinha XPTO <br /> <h6>Editar</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="nomeCompleto" className="form-label">Nome Utilizador*</label>
                            <input type="text" className="form-control" id="nomeCompleto" placeholder="Nome Utilizador" value={formData.nomeCompleto} onChange={(e)=>setFormData((prev)=>({...prev,nomeCompleto:e.target.value}))} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={(e)=>setFormData((prev)=>({...prev,email:e.target.value}))} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telemovel" className="form-label">Telemóvel</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telemóvel" value={formData.telemovel} onChange={(e)=>setFormData((prev)=>({...prev,telemovel:e.target.value}))} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bi" className="form-label">BI*</label>
                            <input type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" value={formData.bi} onChange={(e)=>setFormData((prev)=>({...prev,bi:e.target.value}))} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="username" className="form-label">Username*</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" value={formData.userName} onChange={(e)=>setFormData((prev)=>({...prev,userName:e.target.value}))} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foto" className="form-label">Foto</label>
                            <input type="file" className="form-control" id="foto"  onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={formData.password} onChange={(e)=>setFormData((prev)=>({...prev,password:e.target.value}))}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="confirmPassword" className="form-label">Confirmação Password*</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmação Password" value={formData.confirmPassword} onChange={(e)=>setFormData((prev)=>({...prev,confirmPassword:e.target.value}))}/>
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
