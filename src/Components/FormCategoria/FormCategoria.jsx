import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function FormCategoria() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        tipo: '',
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
        try {
            console.log('Dados enviados:', formData);
            const response = await axios.post('https://localhost:7262/api/Categoria', {
                tipo: formData.tipo
            });
            console.log('Categoria registrada com sucesso:', response.data);
            handleClose();
        } catch (error) {
            console.error('Erro ao registrar categoria:', error);
        }
    };

    return (
        <div>
            <Button variant="light w-auto" onClick={handleShow}>
                Registrar Categoria
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Registrar Categoria</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="tipo" className="form-label">Tipo</label>
                            <input type="text" className="form-control" id="tipo" placeholder="Tipo" onChange={handleChange} />
                        </div>
                        
                        <div className="col-12 mt-3 d-flex justify-content-start">
                            <Button variant="dark" type="button" onClick={handleSubmit}>Registrar</Button>
                            <Button variant="outline-dark" className="me-2 col-md-2" onClick={handleClose}>Cancelar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
