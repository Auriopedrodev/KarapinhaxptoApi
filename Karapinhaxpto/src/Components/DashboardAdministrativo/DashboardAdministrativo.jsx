import React from 'react';

const DashboardAdministrativo = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <small className="mt-2">@Aurio </small>
            <button type="button" className="btn ms-2 btn btn-outline-dark rounded-2">Log out</button>
          </div>
         
        </div>
      </div>
      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
      <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>Amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>elit</td>
            </tr>
            {/* Mais linhas aqui */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DashboardAdministrativo;