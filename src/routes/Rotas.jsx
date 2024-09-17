import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Clientes from "../pages/Clientes/Clientes";
import SignUp from "../pages/SignUp/SignUp";
import Marcacao from "../pages/Marcacao/Marcacao";
import FormProfissionais from "../pages/FormProfissionais/FormProfissionais";
import FormServicos from "../pages/FormServicos/FormServicos";
import FormCategoria from "../pages/FormCategoria/FormCategoria";
import FormAddHorario from "../pages/FormAddHorario/FormAddHorario";
import FormAdministrativo from "../pages/FormAdministrativo/FormAdministrativo";
import Administrador from "../pages/Administrador/Administrador";
import Administrativo from "../pages/Administrativo/Administrativo";
import HomePage from "../pages/HomePage/HomePage";
import FormValidacaoPassword from "../pages/FormValidacaoPassword/FormValidacaoPassword";
import { useEffect, useState } from "react";
import Profissional from "../pages/Profissional/Profissional";

export default function Rotas() {
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(localStorage.getItem("id"));
    };

    window.addEventListener("storage", handleStorageChange);

    // Atualiza userId ao montar o componente
    setUserId(localStorage.getItem("id"));

    // Limpeza do event listener quando o componente desmontar
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserId(localStorage.getItem("id"));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      {userId === null ? (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/profissional" element={<Profissional />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/formValidacaoPassword" element={<FormValidacaoPassword />} />
          <Route path="/marcacao" element={<Marcacao />} />
          <Route path="/formProfissionais" element={<FormProfissionais />} />
          <Route path="/formAdministrativo" element={<FormAdministrativo />} />
          <Route path="/formServicos" element={<FormServicos />} />
          <Route path="/formCategoria" element={<FormCategoria />} />
          <Route path="/formAddHorario" element={<FormAddHorario />} />
          <Route path="/administrativo" element={<Administrativo />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
