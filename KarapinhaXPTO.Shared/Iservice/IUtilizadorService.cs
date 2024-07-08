using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IUtilizadorService
    {
        Task<Utilizador> GetById(int id);

        Task<List<Utilizador>> GetAll();

        Task<bool> Update(UtilizadorUpdateDTO utilizadorUpdateDTO);

        Task<Utilizador> Create(UtilizadorAddDTO utilizadorAddDTO, IFormFile foto);

        Task<bool> Delete(int id);

        Task<Utilizador> GetUserByUsername(string username);

        Task<Utilizador> Login(string username, string password);

        Task<bool> ActivarUtilizador(int id);
        Task<bool> BloquearDesbloquearUtilizador(int id);

        /*Task<List<Utilizador>> ListarUtilizadorParaActivar();*/

        Task<List<Utilizador>> GetClientes();
    }
}
