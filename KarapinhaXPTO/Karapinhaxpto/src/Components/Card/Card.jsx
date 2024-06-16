import React from 'react'
import '../Card/Card.css'

export default function Card() {
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-3 mx-auto">
                        <img src="" alt="" width="AUTO" height="105" />
                        <h1 className="fw-light">@UtilizadorXPTO</h1>
                        <p className="lead text-muted">Bem-vindo de Volta ao Karapinha!
                            É ótimo tê-lo(a) aqui! Estamos aqui para proporcionar a você uma experiência incrível. Explore nossos conteúdos exclusivos sobre beleza e bem-estar e descubra tudo o que o Karapinha tem a oferecer. Estamos ansiosos para compartilhar essa jornada de descobertas com você. Aproveite!</p>

                    </div>
                </div>
            </section>


            <div className="album py-5 bg-light">
                <div className="container">
                    <h2> Servicos - Karapinha XPTO</h2>
                    <h5> Estética</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">

                                <div className="card-body">
                                    <h2>Corte de cabelo</h2>
                                    <p className="card-text">Lavagem do corte, lavagem e pintura.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark">Marcação</button>
                                        </div>
                                        <small className="text-muted">Preço: 2.000AOA</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card shadow-sm">

                                <div className="card-body">
                                    <h2>Barba</h2>
                                    <p className="card-text">corte e Hidração da barba</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark">Marcação</button>
                                        </div>
                                        <small className="text-muted">Preço 2.500</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">

                                <div className="card-body">
                                    <h2>Tranças</h2>
                                    <p className="card-text">Aplicação e lavagem do cabelo brasileiro.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark">Marcação</button>
                                        </div>
                                        <small className="text-muted">Preço 12.000AOA</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <h2> Servicos - Karapinha XPTO</h2>
                    <h5> Cabeleiro</h5>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">

                                <div className="card-body">
                                    <h2>Corte de cabelo</h2>
                                    <p className="card-text">Lavagem do corte, lavagem e pintura.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark">Marcação</button>
                                        </div>
                                        <small className="text-muted">Preço: 2.000AOA</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card shadow-sm">

                                <div className="card-body">
                                    <h2>Barba</h2>
                                    <p className="card-text">corte e Hidração da barba</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark">Marcação</button>
                                        </div>
                                        <small className="text-muted">Preço 2.500</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">

                                <div className="card-body">
                                    <h2>Tranças</h2>
                                    <p className="card-text">Aplicação e lavagem do cabelo brasileiro.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark">Marcação</button>
                                        </div>
                                        <small className="text-muted">Preço 12.000AOA</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}
