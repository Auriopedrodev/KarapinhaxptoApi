using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Kp.DTO;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class PerfilService:IPerfilService
    {
        private readonly IPerfilRepository _perfilRepository;

        public PerfilService(IPerfilRepository perfilRepository)
        {
            _perfilRepository = perfilRepository;
        }

        public async Task<Perfil> Create(PerfilAddDTO perfilAddDTO)
        {
            var perfil = new Perfil
            {
                Descricao = perfilAddDTO.Descricao,
            };
            await _perfilRepository.Create(perfil);
            return (perfil);
        }

        public async Task<bool> Delete(int id)
        {
            Perfil perfil = await _perfilRepository.GetById(id);
            return await _perfilRepository.Delete(perfil);
        }

        public Task<List<Perfil>> GetAll()
        {
            return _perfilRepository.GetAll();
        }

        public Task<Perfil> GetById(int id)
        {
            return _perfilRepository.GetById(id);
        }

        public async Task<bool> Update(PerfilUpdateDTO perfilUpdateDTO)
        {
            var perfil = await _perfilRepository.GetById(perfilUpdateDTO.Id);
            if (perfil != null)
            {
                perfil.Descricao = perfilUpdateDTO.Descricao;
                return await _perfilRepository.Update(perfil);
            }
            return false;
        }
    }
}
