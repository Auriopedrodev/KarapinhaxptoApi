using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class ProfissionalHorarioService:IProfissionalHorarioService
    {
        private readonly IProfissionalHorarioRepository _profissionalHorarioRepository;

        public ProfissionalHorarioService(IProfissionalHorarioRepository profissionalHorarioRepository)
        {
            _profissionalHorarioRepository = profissionalHorarioRepository;
        }

        public async Task<ProfissionalHorario> Create(ProfissionalHorarioAddDTO profissionalHorarioAddDTO)
        {
            var profissionalHorario = new ProfissionalHorario
            {
               ProfissionalId = profissionalHorarioAddDTO.ProfissionalId,
               HorarioId = profissionalHorarioAddDTO.HorarioId,

            };
            await _profissionalHorarioRepository.Create(profissionalHorario);
            return (profissionalHorario);
        }

        public async Task<bool> Delete(int id)
        {
            ProfissionalHorario profissionalHorario = await _profissionalHorarioRepository.GetById(id);
            return await _profissionalHorarioRepository.Delete(profissionalHorario);
        }

        public Task<List<ProfissionalHorario>> GetAll()
        {
            return _profissionalHorarioRepository.GetAll();
        }

        public Task<ProfissionalHorario> GetById(int id)
        {
            return _profissionalHorarioRepository.GetById(id);
        }

        public async Task<bool> Update(ProfissionalHorarioUpdateDTO profissionalHorarioUpdateDTO)
        {
            var profissionalHorario = await _profissionalHorarioRepository.GetById(profissionalHorarioUpdateDTO.ProfissionalId);
            if (profissionalHorario != null)
            {
                profissionalHorario.ProfissionalId = profissionalHorarioUpdateDTO.ProfissionalId;
                profissionalHorario.HorarioId = profissionalHorarioUpdateDTO.HorarioId;

                return await _profissionalHorarioRepository.Update(profissionalHorario);
            }
            return false;
        }
    }
}
