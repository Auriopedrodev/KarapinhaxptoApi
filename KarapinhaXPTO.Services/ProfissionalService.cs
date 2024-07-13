using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class ProfissionalService:IProfissionalService
    {
        private readonly IProfissionalRepository _profissionalRepository;
        private readonly IProfissionalHorarioRepository _profissionalHorarioRepository;
        private readonly IHorarioRepository _horarioRepository;

        public ProfissionalService(IProfissionalRepository profissionalRepository, IProfissionalHorarioRepository profissionalHorarioRepository, IHorarioRepository horarioRepository)
        {
            _profissionalRepository = profissionalRepository;
            _profissionalHorarioRepository = profissionalHorarioRepository;
            _horarioRepository = horarioRepository;
        }


        public async Task<Profissional> Create(ProfissionalAddDTO profissionalAddDTO, IFormFile foto)
        {
            //Pegar o caminho da foto
            string fotoPath = null;

            if (foto != null)
            {
                var uploadsFolder = Path.Combine("wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }
                fotoPath = Path.Combine(uploadsFolder, Guid.NewGuid() + Path.GetExtension(foto.FileName));
                using (var fileStream = new FileStream(fotoPath, FileMode.Create))
                {
                    await foto.CopyToAsync(fileStream);
                }
                fotoPath = "/" + fotoPath.Replace("wwwroot\\", string.Empty).Replace("\\", "/");
            }

            // Adiciona o profissional
            var profissional = new Profissional
            {

                NomeCompleto = profissionalAddDTO.NomeCompleto,
                Email = profissionalAddDTO.Email,
                BI = profissionalAddDTO.BI,
                Telefone = profissionalAddDTO.Telefone,
                Foto = profissionalAddDTO.Foto,
                CategoriaId = profissionalAddDTO.CategoriaId
            };

            await _profissionalRepository.Create(profissional);

            // Adiciona os horários ao profissional
            foreach (var idHorario in profissionalAddDTO.HorariosProfissional)
            {
                var horario = await _horarioRepository.GetById(idHorario);
                if (horario == null)
                {
                    throw new KeyNotFoundException($"Horário com Id {idHorario} não encontrado");
                }

                var profissionalH = new ProfissionalHorario
                {
                    ProfissionalId = profissional.Id,
                    HorarioId = idHorario
                };

                await _profissionalHorarioRepository.Create(profissionalH);
            }

            return profissional;
        }



        /*public async Task<Profissional> Create(ProfissionalAddDTO profissionalAddDTO)
        {
            var profissional = new Profissional
            {
                NomeCompleto = profissionalAddDTO.NomeCompleto,
                Email = profissionalAddDTO.Email,
                Telefone = profissionalAddDTO.Telefone,
                BI = profissionalAddDTO.BI,
                Foto = profissionalAddDTO.Foto,
                CategoriaId = profissionalAddDTO.CategoriaId,
              
            };

            Profissional? profissionalSalvo = await _profissionalRepository.Create(profissional);

           foreach (var horarioId in profissionalAddDTO.HorarioId)
            {
                var horarioProfissional = new ProfissionalHorario
                {
                    HorarioId = horarioId,
                    ProfissionalId = profissionalSalvo.Id,
                };
                await _profissionalHorarioRepository.Create(horarioProfissional);
            }
  
            return (profissional);
        }*/

        public async Task<bool> Delete(int id)
        {
            Profissional profissional = await _profissionalRepository.GetById(id);
            return await _profissionalRepository.Delete(profissional);
        }

        public Task<List<Profissional>> GetAll()
        {
            return _profissionalRepository.GetAll();
        }

        public Task<Profissional> GetById(int id)
        {
            return _profissionalRepository.GetById(id);
        }

        public async Task<bool> Update(ProfissionalUpdateDTO profissionalUpdateDTO)
        {
            var profissional = await _profissionalRepository.GetById(profissionalUpdateDTO.Id);
            if (profissional != null)
            {
                profissional.NomeCompleto = profissionalUpdateDTO.NomeCompleto;
                profissional.Email = profissionalUpdateDTO.Email;
                profissional.Telefone = profissionalUpdateDTO.Telefone;
                profissional.BI = profissionalUpdateDTO.BI;
                profissional.Foto = profissionalUpdateDTO.Foto;
                profissional.CategoriaId = profissionalUpdateDTO.CategoriaId;

                return await _profissionalRepository.Update(profissional);
            }
            return false;
        }

        
    }
}
