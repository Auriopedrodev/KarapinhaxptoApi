﻿using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.IRepository
{
    public interface IUtilizadorRepository:IGenericRepository<Utilizador>
    {
        Task<Utilizador> GetUserByUsername(string username);

        Task<List<Utilizador>> GetClientes();

        Task<List<Utilizador>> ListaRemovidos();


    }
}
