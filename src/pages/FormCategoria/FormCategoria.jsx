import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../FormCategoria/FormCategoria.css';

export default function FormAddCategoria() {
    const [showModal, setShowModal] = useState(false);
    const [categoria, setCategoria] = useState("");

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Categoria:", categoria); // Lógica para lidar com os dados do formulário aqui
        handleClose(); // Fechar modal após submeter
    };

    return (
        <div>
            <Button className="btn btn-dark w-auto" onClick={handleShow}>
                Adicionar Categoria
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static">
                <Modal.Header>
                    <Modal.Title>
                        KARAPINHA XPTO <br />
                        <h6>Adicionar Categoria</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="nomeCategoria" className="form-label">Nome da Categoria*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nomeCategoria"
                                placeholder="Nome da Categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mt-3 d-flex justify-content-start border-dark">
                            <Button className="btn btn-dark me-2" type="submit">Registar</Button>
                            <Button className="btn btn-dark" onClick={handleClose}>Fechar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
