import React from 'react';
import '../Hero/Hero.css';
import { sanguita3 } from '../imagens';

export default function Hero() {
    return (
        <div className="containerPrincipal ">
        <div className="hero-section">
          <div className="hero-image col-md-6">
            <img src={sanguita3} alt="Hero Image" className="img-fluid"/>
          </div>
          <div className="hero-text col-md-6">
            <h1 className="display-2"> <strong>KARAPINHA XPTO</strong></h1>
            <p className="lead">Você está convidado(a) a explorar o Karapinha, um website feito especialmente para os amantes da beleza! De dicas de cuidados com os cabelos a tendências de moda e maquiagem, o Karapinha é seu guia completo para estar sempre por dentro das últimas novidades. Não perca tempo! Visite-nos agora mesmo e deixe-se encantar pelo universo fascinante da beleza. Clique aqui para começar sua jornada no Karapinha!</p>
            <button className="buttomCode btn btn-dark  w-auto " type="button">Conhece-nos</button>
          </div>
        </div>
      </div>

      


    )
}
