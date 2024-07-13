import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';

export default function FormCarrinho() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        servico: '',
        profissional: '',
        data: '',
        hora: ''
    });
    const [carrinho, setCarrinho] = useState([]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleAddToCart = () => {
        setCarrinho([...carrinho, formData]);
        setFormData({
            servico: '',
            profissional: '',
            data: '',
            hora: ''
        });
    };

    const handleRemoveFromCart = (index) => {
        setCarrinho(carrinho.filter((item, i) => i !== index));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://localhost:7262/api/Carrinho/CriarCarrinho', {
                itens: carrinho
            });
            console.log('Response:', response.data);
            handleClose(); // Fechar modal após submeter
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Button variant="light w-auto" onClick={handleShow}>
                Adicionar ao Carrinho
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Adicionar ao Carrinho</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="servico" className="form-label">Serviço*</label>
                            <select id="servico" className="form-control" onChange={handleChange} value={formData.servico}>
                                <option value="">Escolha um serviço</option>
                                <option value="servico1">Serviço 1</option>
                                <option value="servico2">Serviço 2</option>
                                <option value="servico3">Serviço 3</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="profissional" className="form-label">Profissional*</label>
                            <input type="text" className="form-control" id="profissional" placeholder="Profissional" onChange={handleChange} value={formData.profissional} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="data" className="form-label">Data*</label>
                            <input type="date" className="form-control" id="data" onChange={handleChange} value={formData.data} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="hora" className="form-label">Hora*</label>
                            <input type="time" className="form-control" id="hora" onChange={handleChange} value={formData.hora} />
                        </div>
                        <div className="col-12 mt-3">
                            <Button variant="dark w-auto" type="button" onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
                        </div>
                    </form>
                    <h6 className="mt-4">Carrinho de Serviços</h6>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Serviço</th>
                                <th>Profissional</th>
                                <th>Data</th>
                                <th>Hora</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrinho.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.servico}</td>
                                    <td>{item.profissional}</td>
                                    <td>{item.data}</td>
                                    <td>{item.hora}</td>
                                    <td>
                                        <Button variant="outline-dark" size="sm" onClick={() => handleRemoveFromCart(index)}>Remover</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="col-12 mt-3 d-flex justify-content-start">
                        <Button variant="dark" type="button" onClick={handleSubmit}>Submeter</Button>
                        <Button variant="outline-dark" className="me-2 col-md-2" onClick={handleClose}>Cancelar</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
