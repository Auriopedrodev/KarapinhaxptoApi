import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importe o Axios se ainda não o fez
import '../ServicosCliente/ServicosCliente.css';
import FormCarrinho from '../FormCarrinho/FormCarrinho';

export default function ServicosCliente() {
    const [servicos, setServicos] = useState([]);

    async function fetchServicos() {
        try {
            const response = await axios.get('https://localhost:7262/api/Servico/ListarAllServicos');
            setServicos(response.data);
        } catch (error) {
            console.error('Erro ao buscar serviços:', error);
        }
    }


    useEffect(() => {
        
        fetchServicos();
    }, []);

    const renderIcon = (categoriaId) => {
        switch(categoriaId) {
            case 1:
                return <i className="fi fi-br-barber-shop ms-2 display-4 "></i>;
            case 2:
                return <i className="fi fi-br-candle-lotus-yoga ms-2 display-4"></i>;
            default:
                return <i className="fi fi-br-makeup-brush ms-2 display-4"></i>;
        }
    }

    return (
        <div className="d-flex flex-wrap">
            {servicos.map(servico => (
                <div key={servico.id} className="card bg-black text-bg-dark mb-1 me-2">
                    <div className="card-header"></div>
                    <div className="card-body d-flex align-items-center">
                        {renderIcon(servico.categoriaId)}
                        <div className="ms-3">
                            <h5 className="card-title">{servico.tipoServico}</h5>
                            <p className="card-text">Preço {servico.precoServico} AOA</p>
                            <div><FormCarrinho/></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
