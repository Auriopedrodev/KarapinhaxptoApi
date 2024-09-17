import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormEditarServico from '../FormEditarServico/FormEditarServico';

export default function TabelaServicos() {
    const [servicos, setServicos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const fetchData = async () => {
        try {
            // Buscar serviços
            const servicosResponse = await axios.get('https://localhost:7262/api/Servico/ListaServicos');
            setServicos(servicosResponse.data); // Assume que a resposta contém um array de objetos de serviços
            
            // Buscar categorias
            const categoriasResponse = await axios.get('https://localhost:7262/api/Categoria');
            setCategorias(categoriasResponse.data); // Assume que a resposta contém um array de objetos de categorias
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        // Busca dados ao montar o componente
        fetchData();

        // Configura o setTimeout para buscar dados periodicamente
        const interval = setInterval(() => {
            fetchData();
        }, 5000); // Atualiza a cada 5 segundos

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []);

    const removerUtilizador = async (id) => {
        try {
            await axios.delete(`https://localhost:7262/api/Servico/RemoverUtilizador?id=${id}`);
            setServicos(servicos.filter(servico => servico.id !== id)); // Atualiza a lista de serviços removendo o serviço excluído
        } catch (error) {
            console.error('Erro ao remover serviço:', error);
        }
    };

    // Função para obter o nome da categoria com base no id
    const getCategoriaNome = (id) => {
        const categoria = categorias.find(c => c.id === id);
        return categoria ? categoria.tipo : 'Desconhecida';
    };

    return (
        <div>
            <div className="mt-5">
                <h2><i className="bi bi-bag-fill"></i> Lista de Serviços</h2>
                <div className="container mt-4">
                    <table className="table table-dark table-hover">
                        <thead className="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Categoria</th>
                                <th>Tipo</th>
                                <th>Preço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicos.map(servico => (
                                <tr key={servico.id}>
                                    <td>{servico.id}</td>
                                    <td>{getCategoriaNome(servico.categoriaId)}</td>
                                    <td>{servico.tipoServico}</td>
                                    <td>{servico.precoServico}</td>
                                    <td>
                                        <div className="row justify-content-center">
                                            <div className="col d-flex justify-content-center">
                                                <FormEditarServico servico={servico} />
                                            </div>
                                            <div className="col d-flex justify-content-center">
                                                <i 
                                                    className="bi bi-person-x display-6"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => removerUtilizador(servico.id)}
                                                ></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
