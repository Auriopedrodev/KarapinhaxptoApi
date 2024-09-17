import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './FormCriarProfissional.css';

export default function FormCriarProfissional() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        bi: '',
        foto: null,
        telefone: '',
        categoriaId: '',
        perfilId: '',
        password: '',
        horariosProfissional: [{ horarioId: '' }]
    });
    const [categorias, setCategorias] = useState([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        fetchCategorias();
        fetchHorarios();
    }, []);

    const fetchCategorias = async () => {
        try {
            const response = await axios.get('https://localhost:7262/api/Categoria');
            setCategorias(response.data);
        } catch (error) {
            console.error('Houve um erro ao buscar as categorias!', error);
        }
    };

    const fetchHorarios = async () => {
        try {
            const response = await axios.get('https://localhost:7262/api/Horario');
            setHorariosDisponiveis(response.data);
        } catch (error) {
            console.error('Houve um erro ao buscar os horários disponíveis!', error);
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setError('');
        setValidationErrors({});
    };

    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData({
            ...formData,
            [id]: files ? files[0] : value
        });
        setValidationErrors({
            ...validationErrors,
            [id]: ''
        });
    };

    const handleHorarioChange = (index, field, value) => {
        const newHorarios = [...formData.horariosProfissional];
        newHorarios[index] = {
            ...newHorarios[index],
            [field]: value
        };
        setFormData({
            ...formData,
            horariosProfissional: newHorarios
        });
    };

    const addHorario = () => {
        setFormData({
            ...formData,
            horariosProfissional: [...formData.horariosProfissional, { horarioId: '' }]
        });
    };

    const removeHorario = (index) => {
        const newHorarios = [...formData.horariosProfissional];
        newHorarios.splice(index, 1);
        setFormData({
            ...formData,
            horariosProfissional: newHorarios
        });
    };

    const validateForm = () => {
        let errors = {};
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Email inválido";
        }

        const telefoneRegex = /^9\d{8}$/;
        if (!telefoneRegex.test(formData.telefone)) {
            errors.telefone = "Telefone inválido (deve começar com 9 e ter 9 dígitos)";
        }

        const biRegex = /^(?=.*[A-Z].*[A-Z])(?=.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d).{13}$/;
        if (!biRegex.test(formData.bi)) {
            errors.bi = "BI inválido (deve ter 13 caracteres, incluindo 2 letras maiúsculas)";
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            const formDataToSend = new FormData();
            formDataToSend.append('nomeCompleto', formData.nomeCompleto);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('bi', formData.bi);
            formDataToSend.append('foto', formData.foto);
            formDataToSend.append('telefone', formData.telefone);
            formDataToSend.append('categoriaId', formData.categoriaId);
            formDataToSend.append('perfilId', formData.perfilId);
            formDataToSend.append('password', formData.password);
            formData.horariosProfissional.forEach((horario) => {
                formDataToSend.append('HorariosProfissional', horario.horarioId);
            });

            try {
                const response = await axios.post('https://localhost:7262/CriarProfissional', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Response:', response.data);
                handleClose();
            } catch (error) {
                console.error('Error:', error);
                if (error.response) {
                    console.error('Status:', error.response.status);
                    console.error('Data:', error.response.data);
                    setError('Erro ao criar profissional. Verifique os dados e tente novamente.');
                } else if (error.request) {
                    console.error('Request:', error.request);
                    setError('Erro ao conectar com o servidor. Verifique sua conexão e tente novamente.');
                } else {
                    console.error('Error Message:', error.message);
                    setError('Erro inesperado. Tente novamente mais tarde.');
                }
            }
        }
    };

    return (
        <div>
            <Button variant="light w-auto" onClick={handleShow}>
                Adicionar Profissional
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header>
                    <Modal.Title>Karapinha XPTO <br /> <h6>Registar Profissional</h6></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="nomeCompleto" className="form-label">Nome Completo*</label>
                            <input type="text" className="form-control" id="nomeCompleto" placeholder="Nome Completo" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} />
                            {validationErrors.email && <div className="text-danger">{validationErrors.email}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bi" className="form-label">Bilhete de Identidade*</label>
                            <input type="text" className="form-control" id="bi" placeholder="Bilhete de Identidade" onChange={handleChange} />
                            {validationErrors.bi && <div className="text-danger">{validationErrors.bi}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foto" className="form-label">Foto*</label>
                            <input type="file" className="form-control" id="foto" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telefone" className="form-label">Telefone*</label>
                            <input type="text" className="form-control" id="telefone" placeholder="Telefone" onChange={handleChange} />
                            {validationErrors.telefone && <div className="text-danger">{validationErrors.telefone}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="text" className="form-control" id="password" placeholder="password" onChange={handleChange} />
                            {validationErrors.telefone && <div className="text-danger"></div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="categoriaId" className="form-label">Categoria*</label>
                            <select className="form-select" id="categoriaId" onChange={handleChange}>
                                <option value="">Selecione uma categoria...</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.tipo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Horários do Profissional</label>
                            {formData.horariosProfissional.map((horario, index) => (
                                <div key={index} className="d-flex align-items-center mb-2">
                                    <select
                                        className="form-select w-50 me-2"
                                        value={horario.horarioId}
                                        onChange={(e) => handleHorarioChange(index, 'horarioId', e.target.value)}
                                    >
                                        <option value="">Selecione o horário...</option>
                                        {horariosDisponiveis.map((horarioOpcao, index) => (
                                            <option key={index} value={horarioOpcao.id}>{horarioOpcao.hora}</option>
                                        ))}
                                    </select>
                                    <Button
                                        variant="outline-danger"
                                        className="w-auto"
                                        onClick={() => removeHorario(index)}
                                    >
                                        Remover
                                    </Button>
                                </div>
                            ))}
                            <Button variant="outline-dark" className="mt-2 w-auto" onClick={addHorario}>Adicionar Horário</Button>
                        </div>
                        <div className="col-12 mt-3 d-flex justify-content-start">
                            <Button variant="dark" type="button" onClick={handleSubmit}>Registar</Button>
                            <Button variant="outline-dark" className="ms-2 col-md-2" onClick={handleClose}>Cancelar</Button>
                        </div>
                        {error && <div className="col-12 mt-3 text-danger">{error}</div>}
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}