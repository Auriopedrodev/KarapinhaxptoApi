import React from "react";
import "./HomeCliente.css";
import { heroOne, sanguita1, sanguita2, sanguita3, sanguita4 } from "../imagens";

export default function HomeCliente() {
  return (
    <div className="mb-5">
      <section className="hero-section">
        <div className="first col-md-6">
          <img src={heroOne} alt="" className="" />
        </div>
        <div className="ms-3 col-md-6 ">
          <h1 className="display-5">
            Bem vindo <strong>KARAPINHA XPTO</strong>
          </h1>
          <p className="lead mt-5">
            Você está convidado(a) a explorar o Karapinha, um website feito
            especialmente para os amantes da beleza! De dicas de cuidados com os
            cabelos a tendências de moda e maquiagem, o Karapinha é seu guia
            completo para estar sempre por dentro das últimas novidades. 
          </p>
        </div>
      </section>
      <section className="hero-section mt-5">
        <div className="ms-5 col-md-5">
          <h1 className="display-5">
            <strong>Penteados</strong>
          </h1>
          <p className="mt-3">
            Você está convidado(a) a explorar o Karapinha, um website feito
            especialmente para os amantes da beleza!{" "}
          </p>
        </div>
        <div className="first col-md-5">
          <img src={sanguita1} alt="" className="" />
        </div>
      </section>
      <h2 className="titlePentados d-flex justify-content-center align-items-center mt-5 display-4">Nossos Pentados</h2>
      <section className="hero-section mt-5">
        
        <div className="mt-5">
          <img src={sanguita1} alt="" className=" ms-3" />
          <img src={sanguita2} alt="" className="ms-3"/>
          <img src={sanguita4} alt="" className="ms-3"/>
          <img src={sanguita3} alt="" className="ms-3 "/>
        </div>
      
      
      </section>
    </div>
  );
}
