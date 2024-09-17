using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using Kp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IPerfilService
    {
        Task<Perfil> GetById(int id);

        Task<List<Perfil>> GetAll();

        Task<bool> Update(PerfilUpdateDTO perfilUpdateDTO);

        Task<Perfil> Create(PerfilAddDTO perfilAddDTO);

        Task<bool> Delete(int id);
    }
}
