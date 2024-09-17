import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function FormEditarServico({ servico }) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        tipoServico: '',
        precoServico: '',
        categoria: '',
    });
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('https://localhost:7262/api/Categoria');
                setCategorias(response.data);
            } catch (error) {
                console.error('Error fetching categorias:', error);
            }
        };

        fetchCategorias();
    }, []);

    useEffect(() => {
        if (servico) {
            setFormData({
                tipoServico: servico.tipoServico || '',
                precoServico: servico.precoServico || '',
                categoria: servico.categoriaId || '',
            });
        }
    }, [servico]);

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
            const response = await axios.put('https://localhost:7262/api/Servico/ActilizarServico', {
                id: servico.id,
                tipoServico: formData.tipoServico,
                precoServico: formData.precoServico,
                categoriaId: formData.categoria
            });
            console.log('Serviço registrado com sucesso:', response.data);
            handleClose();
        } catch (error) {
            console.error('Error registrando serviço:', error);
        }
    };

    return (
        <div>
            <Button variant="w-auto" onClick={handleShow}>
                <i className="bi bi-pencil-square display-6 text-light"></i>
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Actualizar Serviço</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="tipoServico" className="form-label">Tipo de Serviço*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tipoServico" 
                                placeholder="Tipo de Serviço" 
                                value={formData.tipoServico} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="precoServico" className="form-label">Preço do Serviço*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="precoServico" 
                                placeholder="Preço do Serviço" 
                                value={formData.precoServico} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="categoria" className="form-label">Categoria*</label>
                            <select 
                                className="form-control" 
                                id="categoria" 
                                value={formData.categoria} 
                                onChange={handleChange}
                            >
                                <option value="">Selecione uma Categoria</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.tipo}
                                    </option>
                                ))}
                            </select>
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
