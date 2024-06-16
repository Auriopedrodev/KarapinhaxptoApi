import React from 'react';
import { Link } from 'react-router-dom';
import '../Servico/Servico.css';
import { sanguita1 } from '../imagens';
import { estetica } from '../imagens';


export default function Servico() {
    return (
        <div className='cardSection'>
            <div>
               <h1 className="tituloServico"> Serviços </h1> 
            </div>
            <div class="container py-5">
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-white bg-dark rounded-4">
                            <img src={sanguita1} alt="" />
                            <h2>Cabeleiro</h2>
                            <p>Descubra uma nova experiência de beleza no Salão Karapinha! Nossos cabeleireiros especializados oferecem tratamentos personalizados, cortes modernos e coloração impecável. Agende sua visita e transforme seu visual. Esperamos por você!</p>
                            <Link to={'/login'} class="buttomCodeServico btn btn-outline-light" type="button">Saiba mais</Link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-light border rounded-4">
                            <img src={estetica} alt="" />
                            <h2>Estética</h2>
                            <p>Você está convidado(a) para experimentar nossos exclusivos serviços de estética no Karapinha! Oferecemos tratamentos personalizados para cuidar da sua pele, rejuvenescê-la e realçar sua beleza natural.  Esperamos por você!</p>
                            <Link to={'/login'} class="buttomCodeServico btn btn-outline-dark" type="button">Saiba mais</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
