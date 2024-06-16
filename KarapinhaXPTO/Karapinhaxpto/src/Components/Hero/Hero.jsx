import React from 'react'
import './Hero.css'
import { sanguita3 } from '../imagens'

export default function Hero() {
    return (
        <div class="container my-5">
        <div class="hero-section">
          <div class="hero-image col-md-6">
            <img src={sanguita3} alt="Hero Image" class="img-fluid"/>
          </div>
          <div class="hero-text col-md-6">
            <h1 class="display-4">KARAPINHA XPTO</h1>
            <p class="lead">Você está convidado(a) a explorar o Karapinha, um website feito especialmente para os amantes da beleza! De dicas de cuidados com os cabelos a tendências de moda e maquiagem, o Karapinha é seu guia completo para estar sempre por dentro das últimas novidades. Não perca tempo! Visite-nos agora mesmo e deixe-se encantar pelo universo fascinante da beleza. Clique aqui para começar sua jornada no Karapinha!</p>
            <button class="buttomCode btn btn-dark btn-sm " type="button">Conhece-nos</button>
          </div>
        </div>
      </div>
    )
}
