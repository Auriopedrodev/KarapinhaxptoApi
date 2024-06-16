import React from 'react';
import './HeroOne.css';
import { sanguita1 } from '../imagens';


function HeroOne() {
  return (
    <div class="imagem-home">
    <section>
      <img src={sanguita1} alt="Bem-vindos" />
    </section>  
    <section className='Textos'>
      <h2 >Bem vindos ao</h2>
      <h3 >KarapinhaXPTO</h3>
      <br />
      <p>Você está pronto para uma experiência de beleza única? No Salão de Cabeleireiro e Estética Karapinha, transformamos sua visão de beleza em realidade. Nosso site está repleto de informações e serviços feitos sob medida para você.</p>
    </section>
  </div>
  );
}

export default HeroOne;
