import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default function FormAddHorario() {
    const [showModal, setShowModal] = useState(false);
    const [horario, setHorario] = useState("");

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Horário:", horario); // Lógica para lidar com os dados do formulário aqui
        handleClose(); // Fechar modal após submeter
    };

    return (
        <div>
            <Button className="btn btn-dark w-auto" onClick={handleShow}>
                Adicionar Horário
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static">
                <Modal.Header>
                    <Modal.Title>
                        KARAPINHA XPTO <br />
                        <h6>Adicionar Horário</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="horario" className="form-label w-50 p-3">Horário*</label>
                            <input
                                type="time" className="form-control" id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} required/>
                        </div>
                        <div className="col-12 mt-3 d-flex justify-content-start border-dark">
                            <Button className="btn btn-dark me-2" type="submit">Guardar</Button>
                            <Button className="btn btn-dark" onClick={handleClose}>Fechar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
