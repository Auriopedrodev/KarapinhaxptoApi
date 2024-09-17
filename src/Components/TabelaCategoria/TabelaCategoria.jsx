import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TabelaCategoria() {
    const [categorias, setCategoria] = useState([]);

    const fetchCategoria = async () => {
        try {
            const response = await axios.get('https://localhost:7262/api/Categoria');
            setCategoria(response.data); // Assume que a resposta contém um array de objetos de categorias
        } catch (error) {
            console.error('Erro ao buscar categoria:', error);
        }
    };

    useEffect(() => {
        // Busca dados ao montar o componente
        fetchCategoria();

        // Configura o setTimeout para buscar dados periodicamente
        const interval = setInterval(() => {
            fetchCategoria();
        }, 5000); // Atualiza a cada 5 segundos

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="mt-5">
                <h2><i className="bi bi-bag-fill"></i> Lista de Categoria</h2>
                <div className="container mt-4">
                    <table className="table table-dark table-hover">
                        <thead className="text-center">
                            <tr>
                                <th>ID</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorias.map(categoria => (
                                <tr key={categoria.id}>
                                    <td>{categoria.id}</td>
                                    <td>{categoria.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
