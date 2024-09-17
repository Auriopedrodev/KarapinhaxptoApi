import React from 'react'

export default function ListaMarcacoesMensal() {
    return (
        <div>
            <div className="mt-3 ">
                <h2> <i class="bi bi-people-fill"></i> Marcações</h2>
                <div className="container mt-4">
                    <table className="table table-bordered">
                        <thead className="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                                <th>Informações Servicos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="d-flex justify-content-center mt-4"> 01</td>
                                <td className=" ">26/03/2024</td>
                                <td>
                                    <ul>
                                        <li><strong>Cliente:</strong> Nunes</li>
                                        <li><strong>Servico:</strong> Corte de cabelo</li>
                                        <li><strong>Profissional:</strong> Luandina</li>
                                        <li><strong>Hora:</strong> 10:00</li>
                                    </ul>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
