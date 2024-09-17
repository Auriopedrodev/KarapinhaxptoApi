import React from 'react'
import ListaMarcacoesMensal from '../ListaMarcacoesMensal/ListaMarcacoesMensal';

export default function Calendario() {
// Função para obter os dias do mês de janeiro de 2024
const obterDiasDoMes = (ano, mes) => {
    const data = new Date(ano, mes, 1);
    const dias = [];
    while (data.getMonth() === mes) {
      dias.push(new Date(data));
      data.setDate(data.getDate() + 1);
    }
    return dias;
  };

  // Array com os nomes dos dias da semana
  const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

  // Gerando os dias de janeiro de 2024
  const janeiro2024 = obterDiasDoMes(2024, 0); // 0 para janeiro

  // Função para dividir os dias em semanas
  const dividirArray = (array, tamanho) => {
    const arrayDividido = [];
    for (let i = 0; i < array.length; i += tamanho) {
      arrayDividido.push(array.slice(i, i + tamanho));
    }
    return arrayDividido;
  };

  // Dividindo os dias em semanas
  const semanas = dividirArray(janeiro2024, 7);

  return (
    <div className="Container Meses">
      {/* TABELA DE MESES */}
      <div className="container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              {diasDaSemana.map((dia, index) => (
                <th key={index}>{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semanas.map((semana, indiceSemana) => (
              <tr key={indiceSemana}>
                <td><strong>{`${indiceSemana + 1}º Sem`}</strong></td>
                {semana.map((dia, indiceDia) => (
                  <td key={indiceDia}>{dia.getDate()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* LISTA DE MESES */}
     
    </div>
  );
}
   