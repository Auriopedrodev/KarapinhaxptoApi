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
    public class HorarioService:IHorarioService
    {

        private readonly IHorarioRepository _horarioRepository;

        public HorarioService(IHorarioRepository horarioRepository)
        {
            _horarioRepository = horarioRepository;
        }

        public async Task<Horario> Create(HorarioAddDTO horarioAddDTO)
        {
            var horario = new Horario
            {
                Hora = horarioAddDTO.Hora,
            };
            await _horarioRepository.Create(horario);
            return (horario);
        }

        public async Task<bool> Delete(int id)
        {
            Horario horario = await _horarioRepository.GetById(id);
            return await _horarioRepository.Delete(horario);
        }

        public Task<List<Horario>> GetAll()
        {
            return _horarioRepository.GetAll();
        }

        public Task<Horario> GetById(int id)
        {
            return _horarioRepository.GetById(id);
        }

        public async Task<bool> Update(HorarioUpdateDTO horarioUpdateDTO)
        {
            var horario = await _horarioRepository.GetById(horarioUpdateDTO.Id);
            if (horario != null)
            {
                horario.Hora = horarioUpdateDTO.Hora;
                return await _horarioRepository.Update(horario);
            }
            return false;
        }

    }
}
