import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function FormServicos() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para lidar com os dados do formulário aqui
        handleClose(); // Fechar modal após submeter
    };

    return (
        <div>
            <Button className="btn btn-dark" onClick={handleShow}>
                Registar Servicos
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static">
                <Modal.Header >
                    <Modal.Title>
                        KARAPINHA XPTO <br />
                        <h6>Registar Servicos/Tratamenyo</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="row g-3">
                       
                        <div className="col-md-6">
                            <label htmlFor="categoria" className="form-label">Categoria*</label>
                            <select className="form-select" id="categoria">
                                <option value="">Selecione a Categoria</option>
                                <option value="categoria1">Cabelereiro</option>
                                <option value="categoria2">Estética</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="nomeProfissional" className="form-label">Tipo de serviço*</label>
                            <input type="text" className="form-control" id="nomeProfissional" placeholder="Nome do Profissional" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Preço*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                    
                        <div className="col-12 mt-3 d-flex justify-content-start ">
                            <Button className="btn btn-dark me-2" type="submit">Registar</Button>
                            <Button className="btn btn-dark " onClick={handleClose}>Fechar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
