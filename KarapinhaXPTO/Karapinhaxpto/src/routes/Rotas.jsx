import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Clientes from '../pages/Clientes/Clientes';
import SignUp from '../pages/SignUp/SignUp';
import Utilizador from '../pages/Utilizador/Utilizador';
import Marcacao from '../pages/Marcacao/Marcacao';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} /> 
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/utilizador' element={<Utilizador/>}/>  
                <Route path='/maracacao' element={<Marcacao/>}/>     
            </Routes>
        </BrowserRouter>
    )
};

/*
     

<Route path='/marcacao' element={<Marcacao/>}/>*/