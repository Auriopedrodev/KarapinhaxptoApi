import React from 'react';


export default function Marcacao() {
    return (
        <div className="container mt-5">
            <div className="card">
                <h2 className="gradient-text mb-4">Registro de Serviço</h2>
                <form className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="servico" className="form-label">Serviço</label>
                        <input type="text" className="form-control" id="servico" placeholder="Serviço" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="profissional" className="form-label">Profissional</label>
                        <input type="text" className="form-control" id="profissional" placeholder="Profissional" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="preco" className="form-label">Preço</label>
                        <input type="number" className="form-control" id="preco" placeholder="Preço" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="data" className="form-label">Data</label>
                        <input type="date" className="form-control" id="data" />
                    </div>
                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-dark me-2">Registrar</button>
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
