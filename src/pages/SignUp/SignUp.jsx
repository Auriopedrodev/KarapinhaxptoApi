import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telemovel: "",
    bi: "",
    username: "",
    password: "",
    confirmPassword: "",
    foto: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setError("");
    setSuccess("");
  };

  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "telemovel" && value.length > 9) {
      setTimeout(() => {
        setError("O telemóvel deve conter no máximo 9 dígitos.");
        return;
      }, 1000);
    } else if (!/^\d*$/.test(value)) {
        setTimeout(() => {
      setError("O telemóvel deve conter apenas números.");
      return;
    }, 1000);
    } else if (id === "bi") {
      if (value.length > 13) {
        setTimeout(() => {
        setError("O BI deve conter no máximo 13 dígitos.");
        return;
    }, 1000);
      }
    }

    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
    setError("");
  };

  const handleSubmit = async () => {
    if (
      !formData.nomeCompleto ||
      !formData.email ||
      !formData.telemovel ||
      !formData.bi ||
      !formData.username ||
      !formData.foto ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem. Por favor, verifique.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Email inválido. ");
      return;
    }

    const data = new FormData();
    data.append("nomeCompleto", formData.nomeCompleto);
    data.append("email", formData.email);
    data.append("telemovel", formData.telemovel);
    data.append("bi", formData.bi);
    data.append("username", formData.username);
    data.append("password", formData.password);

    if (formData.foto) {
      data.append("foto", formData.foto);
    }
    data.append("perfilId", 3);
    data.append("activar", false);
    data.append("estadoUtilizador", true);

    try {
      console.log("Enviando dados:", data);
      const response = await axios.post(
        "https://localhost:7262/api/Utilizador/CriarUtilizador",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setSuccess("Utilizador registrado com sucesso!");
    } catch (error) {
      console.error("Error:", error);
      setError(
        `Erro ao registrar o utilizador. Código do erro: ${error.response.status}. Mensagem: ${error.response.statusText}`
      );
    }
  };

  return (
    <div>
      <Button variant="dark btn-sm w-100" onClick={handleShow}>
        Criar Conta
      </Button>

      <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header>
          <Modal.Title>
            Karapinha XPTO <br /> <h6>Registar Utilizador</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="nomeCompleto" className="form-label">
                Nome Utilizador*
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeCompleto"
                placeholder="Nome Utilizador"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="telemovel" className="form-label">
                Telemóvel
              </label>
              <input
                type="text"
                className="form-control"
                id="telemovel"
                maxLength="9"
                placeholder="Telemóvel"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="bi" className="form-label">
                BI*
              </label>
              <input
                type="text"
                className="form-control"
                id="bi"
                placeholder="Bilhete de Identidade"
                maxLength="13"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="username" className="form-label">
                Username*
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="foto" className="form-label">
                Foto
              </label>
              <input
                type="file"
                className="form-control"
                id="foto"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmação Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirmação Password"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 mt-3 d-flex justify-content-start">
              <Button variant="dark" type="button" onClick={handleSubmit}>
                Registar
              </Button>
              <Button
                variant="outline-dark"
                className="me-2 col-md-2"
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
