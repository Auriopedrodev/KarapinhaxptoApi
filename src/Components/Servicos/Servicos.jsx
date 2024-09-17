import React from 'react';
import '../Servicos/Servicos.css';

export default function Servicos() {
            const servico = [
            {
                nome: "Corte de cabelo",
                descricao: "Lavagem do corte, lavagem e pintura.",
                preco: "2.000AOA"
            },
            {
                nome: "Barba",
                descricao: "Corte e hidratação da barba.",
                preco: "2.500AOA"
            },
            {
                nome: "Tranças",
                descricao: "Aplicação e lavagem do cabelo brasileiro.",
                preco: "12.000AOA"
            },
            {
                nome: "Tranças",
                descricao: "Aplicação e lavagem do cabelo brasileiro.",
                preco: "12.000AOA"
            }
            
        ];
    
        return (
            <main className="ServicosPrincipais">
                <h2 className="tituloServicos display-6">Serviços - <strong className="ms-2">Karapinha XPTO</strong></h2>
                <hr className="linha d-flex justify-content-center align-content-center  w-75"/>
                <div className="row m-5">
                                      
                    <small className="mb-3"> Tipo de serviço |<strong> Cabeleiro/ Estética</strong></small>
                    {servico.map((servico, index) => (
                        <div className="col-4 mb-3" key={index}>
                            <div className="card h-100 w-100">
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h2 className="card-title">{servico.nome}</h2>
                                        <p className="card-text">{servico.descricao}</p>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <button type="button" className="btn btn-sm btn-dark me-3">Marcação</button>
                                            <small className="text-muted">{servico.preco}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
    )
};
