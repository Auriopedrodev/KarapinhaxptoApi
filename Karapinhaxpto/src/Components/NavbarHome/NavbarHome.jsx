import React from 'react';
import { Link } from 'react-router-dom';
import '../NavbarHome/NavbarHome.css';
import Servico from '../../../public/CategoriasPrincipais/CategoriasPrincipais';
import Hero from '../Hero/Hero';


export default function NavbarHome() {
    return (
        <div className="">
            <nav id="navbar-example2" className="navbar navbar-expand-lg ">
                <a className="navbar-brand  " href="#">Karapinha XPTO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse linksPagina" id="navbarNav">
                    <ul className="navbar-nav custom-nav">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="">Página Inicial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading1">Servicos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading3">Conta</a>
                        </li>
                        
                        <li className="nav-item">
                            <Link to={'/login'} type="button" className="btn btn-outline-dark ms-2 justify-content-end" >Fechar Conta</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example p-4 rounded-2" tabindex="0">
                <span  id="scrollspyHeading1"><Hero/></span>
                
                <span id="scrollspyHeading3">
                     <Servico/>
                </span>      
            </div>
        </div>
    );
};
