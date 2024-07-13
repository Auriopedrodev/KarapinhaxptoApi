import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriasPrincipais.css';
import { sanguita1 } from '../../src/Components/imagens';
import { estetica } from '../../src/Components/imagens';


export default function CategoriasPrincipais() {
    return (
        <div className="cardSection">
            <div>
                <h1 className="tituloServico"> Serviços </h1>
            </div>
            <div class=" py-5">
                <div class="row align-items-md-stretch">
                <div class=" col-md-5">
                        <div class="cardOnly bg-light border rounded-4 d-flex flex-row mb-3">
                            <img src={estetica} alt="" className="rounded-5"/>
                            <h2 >Estética</h2>
                            <section className="conteudoCard">
                                  <p >Você está convidado(a) para experimentar nossos exclusivos serviços de estética no Karapinha! Oferecemos tratamentos personalizados para cuidar da sua pele, rejuvenescê-la e realçar sua beleza natural.  Esperamos por você!</p>
                            <Link to={'/login'} class="buttomCodeServico btn btn-outline-dark" type="button">Saiba mais</Link>  
                            </section>
                        </div>
                    </div>
                    <div class=" col-md-5">
                        <div class="cardTwo  border rounded-4 d-flex flex-row mb-3">
                            <img src={estetica} alt="" className="rounded-5"/>
                            <h2>Estética</h2>
                            <section className="conteudoCard">
                                  <p >Você está convidado(a) para experimentar nossos exclusivos serviços de estética no Karapinha! Oferecemos tratamentos personalizados para cuidar da sua pele, rejuvenescê-la e realçar sua beleza natural.  Esperamos por você!</p>
                            <Link to={'/login'} class="buttomCodeServico btn btn-outline-dark" type="button">Saiba mais</Link>  
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
