import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import axios from "axios";

export default function FormReagendarMarcacao() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    categoria: "",
    servico: "",
    profissional: "",
    data: "",
    hora: "",
  });
  const [carrinho, setCarrinho] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [profissionalHorario, setProfissionalHorario] = useState([]);

  const [indexCategoria, setIndexCategoria] = useState("");
  const [indexServico, setIndexServico] = useState("");
  const [indexProfissional, setIndexProfissional] = useState("");
  const [indexHorario, setIndexHorario] = useState("");

  const [servicosCascata, setServicosCascata] = useState([]);
  const [profissionaisCascata, setProfissionaisCascata] = useState([]);
  const [horariosCascata, setHorariosCascata] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get("https://localhost:7262/api/Categoria");
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao obter categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const fetchServicosEProfissionais = async () => {
      try {
        const responseServico = await axios.get("https://localhost:7262/api/Servico/ListarAllServicos");
        setServicos(responseServico.data);

        const responseProfissional = await axios.get("https://localhost:7262/api/Profissional");
        setProfissionais(responseProfissional.data);

        const responseProfissionalHorario = await axios.get("https://localhost:7262/api/ProfissionalHorario");
        setProfissionalHorario(responseProfissionalHorario.data);

        const responseHorario = await axios.get("https://localhost:7262/api/Horario");
        setHorarios(responseHorario.data);
      } catch (error) {
        console.error("Erro ao obter serviços e profissionais:", error);
      }
    };

    fetchServicosEProfissionais();
  }, []);

  useEffect(() => {
    const fetchProfissioalHorario = async () => {
      try {
        const profissionalHora = profissionalHorario.filter(
          (ph) => ph.profissionalId === parseInt(indexProfissional)
        );
        const horariosFiltrados = horarios.filter((hp) =>
          profissionalHora.some((h) => h.horarioId === hp.id)
        );
        setHorariosCascata(horariosFiltrados);
      } catch (error) {
        console.error("Erro ao obter horários:", error);
      }
    };

    if (indexProfissional) {
      fetchProfissioalHorario();
    } else {
      setHorariosCascata([]);
    }
  }, [indexProfissional, profissionalHorario, horarios]);

  useEffect(() => {
    const fetchCategoriasFiltradas = async () => {
      try {
        const profissionaisFiltrados = profissionais.filter(
          (p) => p.categoriaId === parseInt(indexCategoria)
        );
        setProfissionaisCascata(profissionaisFiltrados);

        const servicosFiltrados = servicos.filter(
          (s) => s.categoriaId === parseInt(indexCategoria)
        );
        setServicosCascata(servicosFiltrados);
      } catch (error) {
        console.error("Erro ao filtrar profissionais e serviços:", error);
      }
    };

    if (indexCategoria) {
      fetchCategoriasFiltradas();
    } else {
      setServicosCascata([]);
      setProfissionaisCascata([]);
    }
  }, [indexCategoria, profissionais, servicos]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleAddToCart = () => {
    const servicoSelecionado = servicosCascata.find((s) => s.id === parseInt(indexServico));
    const itemToAdd = {
      servico: servicoSelecionado?.tipoServico,
      servicoId: parseInt(indexServico),
      profissional: profissionaisCascata.find((p) => p.id === parseInt(indexProfissional))?.nomeCompleto,
      profissionalId: parseInt(indexProfissional),
      data: formData.data,
      hora: horariosCascata.find((h) => h.id === parseInt(indexHorario))?.hora,
      precoServico: servicoSelecionado?.precoServico, // Adicione o valor do serviço aqui
    };

    setCarrinho([...carrinho, itemToAdd]);
    setFormData({
      categoria: "",
      servico: "",
      profissional: "",
      data: "",
      hora: "",
      preco: "",
    });
  };

  const handleRemoveFromCart = (index) => {
    setCarrinho(carrinho.filter((item, i) => i !== index));
  };

  const id = localStorage.getItem('id');

  const handleSubmit = async () => {
    try {
      const totalPagamento = calcularTotal(); // Calcule o total do carrinho
      const marcacaoData = {
        dataRegistoMarcacao: new Date().toISOString(),
        pagamento: totalPagamento, // Defina o pagamento com o total calculado
        estadoMarcacao: false,
        utilizadorId: parseInt(id),
        listaMarcacaoServico: carrinho.map((item) => ({
          categoriaId: parseInt(indexCategoria),
          servicoId: item.servicoId,
          profissionalId: item.profissionalId,
          data: item.data,
          hora: item.hora,
          dataMarcacaoServico: item.data,
        })),
      };
      console.log(marcacaoData);
      const response = await axios.post("https://localhost:7262/api/Marcacao/registarMarcacao", marcacaoData);
      console.log("Marcação realizada com sucesso:", response.data);
      setCarrinho([]);
      handleClose();
    } catch (error) {
      console.error("Erro ao marcar:", error);
    }
  };

  // Função para calcular o total
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + (item.precoServico || 0), 0);
  };

  return (
    <div>
      <Button variant="light w-auto" onClick={handleShow}>
        Marcação
      </Button>

      <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header>
          <Modal.Title>
            Karapinha XPTO <br /> <h6>Adicionar ao Carrinho</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="categoria" className="form-label">
                Categoria*
              </label>
              <select
                id="categoria"
                className="form-control"
                onChange={(e) => setIndexCategoria(e.target.value)}
                value={indexCategoria}
              >
                <option value="">Escolha uma categoria</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.tipo}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="servico" className="form-label">
                Serviço*
              </label>
              <select
                id="servico"
                className="form-control"
                onChange={(e) => setIndexServico(e.target.value)}
                value={indexServico}
              >
                <option value="">Escolha um serviço</option>
                {servicosCascata.map((servico) => (
                  <option key={servico.id} value={servico.id}>
                    {servico.tipoServico}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="profissional" className="form-label">
                Profissional*
              </label>
              <select
                id="profissional"
                className="form-control"
                onChange={(e) => setIndexProfissional(e.target.value)}
                value={indexProfissional}
              >
                <option value="">Escolha um profissional</option>
                {profissionaisCascata.map((profissional) => (
                  <option key={profissional.id} value={profissional.id}>
                    {profissional.nomeCompleto}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="data" className="form-label">
                Data*
              </label>
              <input
                type="date"
                className="form-control"
                id="data"
                onChange={handleChange}
                value={formData.data}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="hora" className="form-label">
                Horário*
              </label>
              <select
                id="hora"
                className="form-control"
                onChange={(e) => setIndexHorario(e.target.value)}
                value={indexHorario}
              >
                <option value="">Escolha um horário</option>
                {horariosCascata.map((horario) => (
                  <option key={horario.id} value={horario.id}>
                    {horario.hora}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <Button variant="light w-auto" onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </Button>
            </div>
          </form>
          <div>
            <h5>Carrinho:</h5>
            <Table>
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Profissional</th>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Preço</th> {/* Adiciona a coluna Preço */}
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
                    <td>{item.precoServico}</td> {/* Mostra o preço do serviço */}
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        Remover
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h5>Total: {calcularTotal()}</h5> {/* Mostra o total do carrinho */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
