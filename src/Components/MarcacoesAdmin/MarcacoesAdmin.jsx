import React from 'react'

export default function MarcacoesAdmin() {
  return (
    <div>
    <h2 className="ms-2 mt-4 mb-3">KARAPINHA XPTO | <strong>serviços</strong></h2>
    <div className="container">
      <div className="row">
        <section className="col ">
          <div className="p-3 rounded-4 text-light customServicos">
            <i className="bi bi-bag-plus-fill custom-contentFuncionalidades mt-2 pb-1 display-2"></i>
            <h4 className="custom-contentFuncionalidades">Adicionar novo servico</h4>
            <div className="d-flex justify-content-center align-items-center">
              <FormCriarServico />
            </div>
          </div>
        </section>
      </div>
    </div>
    <hr className="mt-5" />
    <div className="mt-5 ">
      <h2><i class="bi bi-bag-fill"></i> Lista de Serviços</h2>
      <div className="container mt-4">
        <table className="table table-dark table-hover">
          <thead className="text-center">
            <tr>
              <th>Informações Serviços</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>
                <ul>
                  <li><strong>ID:</strong> 01</li>
                  <li><strong>Categoria:</strong> Nunes</li>
                  <li><strong>Tipo:</strong> Nunes@Gmail.com</li>
                  <li><strong>Preço:</strong> +244 923 456 345</li>

                </ul>
              </td>
              <td>
                <div className="row justify-content-center mt-5">
                  <div className="col d-flex justify-content-center ">
                    <i className="bi bi-pencil-square display-6"></i></div>
                  <div className="col d-flex justify-content-center"><i className="bi bi-person-x display-6"></i></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
