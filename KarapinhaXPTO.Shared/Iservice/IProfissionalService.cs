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
    public interface IProfissionalService
    {

        Task<Profissional> GetById(int id);
        Task<List<Profissional>> GetAll();
        Task<bool> Update(ProfissionalUpdateDTO profissionalUpdateDTO, IFormFile foto);
        Task<Profissional> Create(ProfissionalAddDTO profissionalAddDTO, IFormFile foto);
        Task<bool> Delete(int id);
        Task<bool> Remover(int id);
        Task<List<Profissional>> ListaNaoRemovidos();
        Task<List<Profissional>> GetProfissionalHorario();
        Task<Profissional> GetProfissionalHorarioPorId(int profissionalId);
        Task<Profissional> GetUserByUsername(string username);

        Task<List<Profissional>> GetTop5Profissional();
        /*Task<Profissional> Login(string username, string password);*/

    }
}
