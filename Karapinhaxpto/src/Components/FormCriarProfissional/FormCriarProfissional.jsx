import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './FormCriarProfissional.css';

export default function FormCriarProfissional() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        categoriaId: '',
        email: '',
        foto: '',
        bi: '',
        telemovel: '',
        horariosProfissional: [{ id: '', profissionalId:'', horarioId:''}]
    });
    const [categorias, setCategorias] = useState([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const [error, setError] = useState('');

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
    };

    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleHorarioChange = (index, field, value) => {
        const newHorarios = [...formData.horarios];
        newHorarios[index] = {
            ...newHorarios[index],
            [field]: value
        };
        setFormData({
            ...formData,
            horarios: newHorarios
        });
    };

    const addHorario = () => {
        setFormData({
            ...formData,
            horarios: [...formData.horarios, { id: '', profissionalId:'', horarioId:'' }]
        });
    };

    const removeHorario = (index) => {
        const newHorarios = [...formData.horarios];
        newHorarios.splice(index, 1);
        setFormData({
            ...formData,
            horarios: newHorarios
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://localhost:7262/CriarProfissional', formData);
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
                            <label htmlFor="nomeProfissional" className="form-label">Nome do Profissional*</label>
                            <input type="text" className="form-control" id="nomeProfissional" placeholder="Nome do Profissional" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="categoria" className="form-label">Categoria*</label>
                            <select className="form-select" id="categoria" onChange={handleChange}>
                                <option value="">Selecione uma categoria...</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.tipo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foto" className="form-label">Foto*</label>
                            <input type="file" className="form-control" id="foto" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bilhete" className="form-label">Bilhete*</label>
                            <input type="text" className="form-control" id="bilhete" placeholder="Bilhete" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="telemovel" className="form-label">Telemóvel*</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telemóvel" onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Horários do Profissional</label>
                            {formData.horarios.map((horario, index) => (
                                <div key={index} className="d-flex align-items-center mb-2">
                                    <select
                                        className="form-select w-50 me-2"
                                        value={horario.dia}
                                        onChange={(e) => handleHorarioChange(index, 'dia', e.target.value)}
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
