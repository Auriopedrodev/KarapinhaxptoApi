import React, { useState } from 'react';
import ListaMarcacoesMensal from './ListaMarcacoesMensal/ListaMarcacoesMensal';

const Meses = () => {
  const meses = [
    { nome: 'Jan', id: 'jan', dias: 31, primeiroDia: 1 }, // Primeiro dia: 0=Domingo, 1=Segunda, etc.
    { nome: 'Fev', id: 'fev', dias: 28, primeiroDia: 4 },
    { nome: 'Mar', id: 'mar', dias: 31, primeiroDia: 4 },
    { nome: 'Abr', id: 'abr', dias: 30, primeiroDia: 0 },
    { nome: 'Mai', id: 'mai', dias: 31, primeiroDia: 2 },
    { nome: 'Jun', id: 'jun', dias: 30, primeiroDia: 5 },
    { nome: 'Jul', id: 'jul', dias: 31, primeiroDia: 0 },
    { nome: 'Ago', id: 'ago', dias: 31, primeiroDia: 3 },
    { nome: 'Set', id: 'set', dias: 30, primeiroDia: 6 },
    { nome: 'Out', id: 'out', dias: 31, primeiroDia: 1 },
    { nome: 'Nov', id: 'nov', dias: 30, primeiroDia: 4 },
    { nome: 'Dez', id: 'dez', dias: 31, primeiroDia: 6 },
  ];

  const [mesAtual, setMesAtual] = useState(meses[0].id); // Estado para controlar o mês ativo

  const handleChangeMes = (mesId) => {
    setMesAtual(mesId);
  };

  const renderDiasTabela = (diasNoMes, primeiroDia) => {
    const dias = [];
    let diaAtual = 1;

    // Preenchendo a tabela com os dias do mês
    for (let semana = 0; semana < 6; semana++) {
      const diasDaSemana = [];
      for (let dia = 0; dia < 7; dia++) {
        if (semana === 0 && dia < primeiroDia) {
          diasDaSemana.push(<td key={`empty-${semana}-${dia}`} className="empty"></td>);
        } else if (diaAtual > diasNoMes) {
          diasDaSemana.push(<td key={`empty-${semana}-${dia}`} className="empty"></td>);
        } else {
          diasDaSemana.push(<td key={`dia-${diaAtual}`} className="dia">{diaAtual}</td>);
          diaAtual++;
        }
      }
      dias.push(<tr key={`semana-${semana}`}>{diasDaSemana}</tr>);
    }
    return dias;
  };

  const renderSemanas = () => {
    const semanas = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return semanas.map((dia) => (
      <th key={dia} className="semana">{dia}</th>
    ));
  };

  return (
    <div>
      <ul className="submenu nav nav-pills" id="pills-tab" role="tablist">
        {meses.map((mes) => (
          <li className="nav-item" key={mes.id} role="presentation">
            <button
              className={`nav-link ${mes.id === mesAtual ? 'active' : ''}`}
              id={`pills-${mes.id}-tab`}
              data-bs-toggle="pill"
              type="button"
              onClick={() => handleChangeMes(mes.id)}
            >
              {mes.nome}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="pills-tabContent">
        {meses.map((mes) => (
          <div
            key={mes.id}
            className={`tab-pane fade ${mes.id === mesAtual ? 'show active' : ''}`}
            id={`pills-${mes.id}`}
            role="tabpanel"
          >
            <table className="calendario table table-borderless table-lg">
              <thead>
                <tr>
                  {renderSemanas()}
                </tr>
              </thead>
              <tbody>
                {renderDiasTabela(mes.dias, mes.primeiroDia)}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <hr className="mt-2" />
      
    </div>
  );
};

export default Meses;
