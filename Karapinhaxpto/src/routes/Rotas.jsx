import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Clientes from '../pages/Clientes/Clientes';
import SignUp from '../pages/SignUp/SignUp';
import Utilizador from '../pages/Utilizador/Utilizador';
import Marcacao from '../pages/Marcacao/Marcacao';
import FormProfissionais from '../pages/FormProfissionais/FormProfissionais';
import FormAddProfissionais from '../pages/FormAddProfissionais/FormAddProfissionais';
import FormServicos from '../pages/FormServicos/FormServicos';
import FormCategoria from '../pages/FormCategoria/FormCategoria';
import FormAddHorario from '../pages/FormAddHorario/FormAddHorario';
import FormAdministrativo from '../pages/FormAdministrativo/FormAdministrativo';
import Administrador from '../pages/Administrador/Administrador';
import Administrativo from '../pages/Administrativo/Administrativo';
import HomePage from '../pages/HomePage/HomePage';


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
                <Route path='/formProfissionais' element={<FormProfissionais/>}/>
                <Route path='/formAddProfissionais' element={<FormAddProfissionais/>}/>
                <Route path='/formAdministrativo' element={<FormAdministrativo/>}/>
                <Route path='/formServicos' element={<FormServicos/>}/>
                <Route path='/formCategoria' element={<FormCategoria/>}/>
                <Route path='/formAddHorario' element={<FormAddHorario/>}/>
                <Route path='/administrativo' element={<Administrativo/>}/>
                <Route path='/administrador' element={<Administrador/>}/>
                <Route path='/HomePage' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
};

/*
<Route path='/marcacao' element={<Marcacao/>}/>*/