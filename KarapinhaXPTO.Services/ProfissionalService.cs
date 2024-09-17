using KarapinhaXPTO.DAL.Repository;
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
    public class ProfissionalService : IProfissionalService
    {
        private readonly IProfissionalRepository _profissionalRepository;
        private readonly IProfissionalHorarioRepository _profissionalHorarioRepository;
        private readonly IHorarioRepository _horarioRepository;
        private readonly IEmailService _emailService;
        private readonly string _administradorEmail = "auriopedro.ap@gmail.com";
        private readonly bool loginValidate = false;

        public ProfissionalService(IProfissionalRepository profissionalRepository, IProfissionalHorarioRepository profissionalHorarioRepository, IHorarioRepository horarioRepository, IEmailService emailService)
        {
            _profissionalRepository = profissionalRepository;
            _profissionalHorarioRepository = profissionalHorarioRepository;
            _horarioRepository = horarioRepository;
            _emailService = emailService;
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
                Foto = fotoPath,
                CategoriaId = profissionalAddDTO.CategoriaId,
                Validade = true,
                UserName = profissionalAddDTO.NomeCompleto,
                Password = profissionalAddDTO.Password,
                PerfilId = 4
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


           /* //Email para o administrador sobre a criação de um administrativo novo.
            if (profissional.PerfilId == 4)
            {
                string assunto = "Karapinha XPTO - Perfil Administrativo";
                string menssagem = "Novo Administrador registado na plataforma.\n" +
                                "[Credenciais]:" +
                                $"Username :{profissional.UserName}" + "|" + $"Password:{profissional.Password}";
                await _emailService.SendEmailAsync(profissional.Email, assunto, menssagem);
            }
            else
            {
                //Email para o administrador sobre a criação de um cliente novo.
                string assunto = "Karapinha XPTO - Perfil Cliente";
                string menssagem = $"Novo cliente registado na plataforma.\n" +
                              $"Nome Completo: {profissional.NomeCompleto}\n" +
                              $"Email: {profissional.Email}\n" +
                              $"Telemovel: {profissional.Telefone}\n" +
                              $"Username: {profissional.UserName}\n" +
                              $"BI: {profissional.BI}\n" +
                              "Este perfil deve ser ativo.";
                await _emailService.SendEmailAsync(_administradorEmail, assunto, menssagem);
            }*/
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

        public async Task<bool> Update(ProfissionalUpdateDTO profissionalUpdateDTO, IFormFile foto)
        {
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
            var profissional = await _profissionalRepository.GetById(profissionalUpdateDTO.Id);
            if (profissional != null)
            {
                profissional.NomeCompleto = profissionalUpdateDTO.NomeCompleto;
                profissional.Email = profissionalUpdateDTO.Email;
                profissional.Telefone = profissionalUpdateDTO.Telefone;
                profissional.BI = profissionalUpdateDTO.BI;
                profissional.Foto = fotoPath;
                profissional.CategoriaId = profissionalUpdateDTO.CategoriaId;
                profissional.Validade = profissionalUpdateDTO.Validade;
                profissional.UserName = profissionalUpdateDTO.UserName;
                profissional.Password = profissionalUpdateDTO.Password;
                profissional.PerfilId = profissionalUpdateDTO.PerfilId;
                return await _profissionalRepository.Update(profissional);
            }
            return false;
        }

        public async Task<bool> Remover(int id)
        {
            var profissional = await _profissionalRepository.GetById(id);

            profissional.Validade = false;

            return await _profissionalRepository.Update(profissional);
        }

        public async Task<List<Profissional>> ListaNaoRemovidos()
        {
            return await _profissionalRepository.ListaNaoRemovidos();
        }

        public async Task<List<Profissional>> GetProfissionalHorario()
        {
            return (await _profissionalRepository.GetProfissionalHorarios());
        }

        public async Task<Profissional> GetProfissionalHorarioPorId(int profissionalId)
        {
            return (await _profissionalRepository.GetProfissionalHorariosPorId(profissionalId));
        }

        public Task<List<Profissional>> GetTop5Profissional()
        {
            var professional = _profissionalRepository.GetTop5Profissional();
            return professional;
        }

        public async Task<Profissional> GetUserByUsername(string username)
        {
            return await _profissionalRepository.GetUserByUsername(username);
        }

        /*public async Task<Profissional> Login(string username, string password)
        {
            var profissional = await _profissionalRepository.GetUserByUsername(username);

            if (profissional == null || profissional.Password != password)
            {
                return null;
            }
            return profissional;
        }
        */
    }


}
/*
         
         return new Profissional
 {
     IdProfissional = dto.IdProfissional,
     NomeProfissional = dto.NomeProfissional,
     FkCategoria = dto.FkCategoria,
     EmailProfissional = dto.EmailProfissional,
     FotoProfissional = dto.FotoProfissional,
     BilheteProfissional = dto.BilheteProfissional,
     TelemovelProfissional = dto.TelemovelProfissional,
     Contator = dto.Contador,
     Estado = true,
     Horarios = dto.Horarios.Select(h => new ProfissionalHorario
     {
         IdHorario = h
     }).ToList()
 };
         */