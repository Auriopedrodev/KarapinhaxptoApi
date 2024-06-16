// src/ServiceCardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Servicos/Servicos.css';
import { sanguita1 } from '../imagens';

const Servicos = () => {
  return (
    <div class='contentprincipal'>
      <h2>Nossos Serviços</h2>
      <div class="cartoes">
        <div class="cartao">
          <img src={sanguita1} alt="Imagem do Serviço 1" />
          <h3>Título do Cartão</h3>
          <p>Conteúdo do cartão</p>
          <button>Botão</button>
        </div>
        <div class="cartao">
          <img src={sanguita1} alt="Imagem do Serviço 2" />
          <h3>Título do Cartão</h3>
          <p>Conteúdo do cartão</p>
          <button>Botão</button>
        </div>
      </div>
    </div>


  );
};
export default Servicos;
