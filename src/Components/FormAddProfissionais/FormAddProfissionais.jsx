import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'; // Importar Axios
import './FormAddProfissionais.css';

export default function FormAddProfissionais() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nomeProfissional: '',
        categoria: '',
        email: '',
        foto: '',
        bilhete: '',
        telemovel: '',
        horario: '' // Estado para armazenar o horário selecionado
    });

    // Função para mapear a categoria para um ID
    const mapCategoriaToId = (categoria) => {
        switch (categoria.toLowerCase()) {
            case 'cabelereiro':
                return 1;
            case 'estetica':
                return 2;
            default:
                return null;
        }
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = async () => {
        try {
            // Mapear categoria para ID
            const categoriaId = mapCategoriaToId(formData.categoria);
            if (categoriaId === null) {
                console.error('Categoria inválida');
                return;
            }

            // Preparar FormData para a requisição da API
            const data = new FormData();
            data.append('NomeProfissional', formData.nomeProfissional);
            data.append('Categoria', categoriaId); // Usar o ID da categoria
            data.append('Email', formData.email);
            if (formData.foto) {
                data.append('Foto', formData.foto);
            }
            data.append('Bilhete', formData.bilhete);
            data.append('Telemovel', formData.telemovel);
            data.append('Horario', formData.horario); // Adicionar o horário selecionado

            // Chamada da API para /api/Profissional
            const response1 = await axios.post('https://localhost:7262/api/Profissional', data);
            console.log('Response from /api/Profissional:', response1.data);

            // Fechar modal após submissão bem-sucedida
            handleClose();
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            // Lógica para tratar erros
        }
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // Função para lidar com mudanças nos inputs do formulário
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Função para lidar com mudanças no input de arquivo
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, foto: file });
    };

    // Opções de horários
    const horarios = [
        '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00',
        '16:00', '17:00', '18:00', '19:00'
    ];

    return (
        <div>
            <Button className="btn btn-dark w-auto" onClick={handleShow}>
                Registar Profissional
            </Button>

            <Modal show={showModal} onHide={handleClose} backdrop="static">
                <Modal.Header>
                    <Modal.Title>
                        KARAPINHA XPTO <br />
                        <h6>Registar Profissional</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="nomeProfissional" className="form-label">Nome do Profissional*</label>
                            <input type="text" className="form-control" id="nomeProfissional" placeholder="Nome do Profissional" onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="categoria" className="form-label">Categoria*</label>
                            <select className="form-select" id="categoria" onChange={handleChange} required>
                                <option value="">Selecione a Categoria</option>
                                <option value="cabelereiro">Cabelereiro</option>
                                <option value="estetica">Estetica</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Endereço de Email*</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} required />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="foto" className="form-label">Foto</label>
                            <input type="file" className="form-control" id="foto" onChange={handleFileChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="bilhete" className="form-label">Bilhete*</label>
                            <input type="text" className="form-control" id="bilhete" placeholder="Bilhete de Identidade" onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="telemovel" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="telemovel" placeholder="Telefone" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="horario" className="form-label">Horário do Profissional</label>
                            <select className="form-select" id="horario" onChange={handleChange}>
                                <option value="">Selecione o Horário</option>
                                {horarios.map((horario, index) => (
                                    <option key={index} value={horario}>{horario}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-12 mt-3 d-flex justify-content-start border-dark">
                            <Button className="btn btn-dark me-2" type="button" onClick={handleSubmit}>Registar</Button>
                            <Button className="btn btn-dark" onClick={handleClose}>Fechar</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
