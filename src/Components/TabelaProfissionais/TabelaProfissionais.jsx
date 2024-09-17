import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../TabelaProfissionais/TabelaProfissionais.css';

export default function TabelaProfissionais() {
  const [profissionais, setProfissionais] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState({});

  const fetchData = () => {
    // Busca profissionais
    axios.get('https://localhost:7262/api/Profissional/ListaProfissional')
      .then(response => {
        setProfissionais(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados dos profissionais!', error);
      });

    // Busca horários
    axios.get('https://localhost:7262/api/ProfissionalHorario')
      .then(response => {
        setHorarios(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados dos horários!', error);
      });

    // Busca horários disponíveis
    axios.get('https://localhost:7262/api/Horario')
      .then(response => {
        // Organiza os horários em um objeto para fácil acesso
        const horariosDisponiveisMap = {};
        response.data.forEach(horario => {
          horariosDisponiveisMap[horario.id] = horario.hora; // Supondo que 'hora' seja o campo que contém o horário
        });
        setHorariosDisponiveis(horariosDisponiveisMap);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados dos horários disponíveis!', error);
      });
  };

  useEffect(() => {
    // Busca dados ao montar o componente
    fetchData();

    // Configura o setTimeout para buscar dados periodicamente
    const interval = setInterval(() => {
      fetchData();
    }, 1500); // Atualiza a cada 5 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  // Função para remover um profissional
  const removerProfissional = (id) => {
    axios.delete(`https://localhost:7262/api/Profissional/RemoverProfissional?id=${id}`)
      .then(response => {
        // Atualiza a lista de profissionais após a remoção
        setProfissionais(profissionais.filter(profissional => profissional.id !== id));
      })
      .catch(error => {
        console.error('Houve um erro ao remover o profissional!', error);
      });
  };

  // Mapeia horários aos profissionais
  const profissionaisComHorarios = profissionais.map(profissional => {
    const horariosDoProfissional = horarios
      .filter(horario => horario.profissionalId === profissional.id)
      .map(horario => horariosDisponiveis[horario.horarioId]); // Encontra o horário correspondente

    return { ...profissional, horarios: horariosDoProfissional };
  });

  return (
    <div className="mt-5">
      <h2>Lista de Profissionais</h2>
      <div className="container mt-4">
        <table className="table table-dark table-hover">
          <thead className="text-center">
            <tr>
              <th>Foto</th>
              <th>Informações Profissionais</th>
              <th>Horários</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {profissionaisComHorarios.map(profissional => (
              <tr key={profissional.id}>
                <td className="text-center">
                  <img className="imagemProfissionais" src={`https://localhost:7262/${profissional?.foto}`} alt="Foto do Profissional" />
                </td>
                <td>
                  <ul>
                    <li><strong>Nome:</strong> {profissional.nomeCompleto}</li>
                    <li><strong>Email:</strong> {profissional.email}</li>
                    <li><strong>Telefone:</strong> {profissional.telefone}</li>
                    <li><strong>BI:</strong> {profissional.bi}</li>
                    <li><strong>Categoria:</strong> {profissional.categoriaId}</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    {profissional.horarios?.map((horario, index) => (
                      <li key={index}>{horario}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="row justify-content-center mt-5">
                    <div className="col d-flex justify-content-center">
                      <button className="btn btn-danger" onClick={() => removerProfissional(profissional.id)}>
                        <i className="bi bi-person-x display-6"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
