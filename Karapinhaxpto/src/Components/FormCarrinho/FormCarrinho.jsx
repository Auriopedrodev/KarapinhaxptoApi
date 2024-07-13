import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import axios from 'axios';

export default function FormCarrinho() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        categoria: '',
        servico: '',
        profissional: '',
        data: '',
        hora: ''
    });
    const [carrinho, setCarrinho] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Categoria');
                setCategorias(response.data);
            } catch (error) {
                console.error('Erro ao obter categorias:', error);
            }
        };

        fetchCategorias();
    }, []);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Servico');
                setServicos(response.data);
            } catch (error) {
                console.error('Erro ao obter serviços:', error);
            }
        };

        fetchServicos();
    }, []);

    useEffect(() => {
        const fetchHorarios = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Horario');
                setHorarios(response.data);
            } catch (error) {
                console.error('Erro ao obter horários:', error);
            }
        };

        fetchHorarios();
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

    const handleAddToCart = () => {
        setCarrinho([...carrinho, formData]);
        setFormData({
            categoria: '',
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
            const response = await axios.post('https://localhost:7262/api/Marcacao', {
                categoriaId: formData.categoria,
                servicoId: formData.servico,
                profissional: formData.profissional,
                data: formData.data,
                hora: formData.hora
            });
            console.log('Resposta:', response.data);
            handleClose(); // Fechar modal após submeter
        } catch (error) {
            console.error('Erro ao enviar marcação:', error);
        }
    };

    return (
        <div>
            <Button variant="dark w-auto" onClick={handleShow}>
                Adicionar ao Carrinho
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Adicionar ao Carrinho</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="categoria" className="form-label">Categoria*</label>
                            <select id="categoria" className="form-control" onChange={handleChange} value={formData.categoria}>
                                <option value="">Escolha uma categoria</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="servico" className="form-label">Serviço*</label>
                            <select id="servico" className="form-control" onChange={handleChange} value={formData.servico}>
                                <option value="">Escolha um serviço</option>
                                {servicos.map(servico => (
                                    <option key={servico.id} value={servico.id}>{servico.nome}</option>
                                ))}
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
                            <select id="hora" className="form-control" onChange={handleChange} value={formData.hora}>
                                <option value="">Escolha um horário</option>
                                {horarios.map(horario => (
                                    <option key={horario.id} value={horario.hora}>{horario.hora}</option>
                                ))}
                            </select>
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
