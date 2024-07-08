using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Microsoft.AspNetCore.Http;
using Org.BouncyCastle.Crypto.Macs;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class UtilizadorService:IUtilizadorService
    {
        private readonly IUtilizadorRepository _utilizadorRepository;
        private readonly IEmailService _emailService;
        private readonly string _administradorEmail = "auriopedro.ap@gmail.com";

        public UtilizadorService(IUtilizadorRepository utilizadorRepository, IEmailService emailService)
        {
            _utilizadorRepository = utilizadorRepository;
            _emailService = emailService;
        }

        public async Task<Utilizador> Create(UtilizadorAddDTO utilizadorAddDTO, IFormFile foto)
        {
            //Alterar palavra-passe pela primeira vez*

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


            var utilizador = new Utilizador
            {
                NomeCompleto = utilizadorAddDTO.NomeCompleto,
                Email = utilizadorAddDTO.Email,
                Telemovel = utilizadorAddDTO.Telemovel,
                Foto = fotoPath,
                BI = utilizadorAddDTO.BI,
                UserName = utilizadorAddDTO.UserName,
                Password = utilizadorAddDTO.Password,
                PerfilId = utilizadorAddDTO.PerfilId,
                Activar = utilizadorAddDTO.Activar,
                EstadoUtilizador = true,
            };
        
            await _utilizadorRepository.Create(utilizador);

            //Email para o administrador sobre a criação de um administrativo novo.
            if (utilizador.PerfilId == 3)
            {
                string assunto = "Karapinha XPTO - Perfil Administrativo";
                string menssagem = "Novo Administrador registado na plataforma.\n" +     
                                "[Credenciais]:" +
                                $"Username :{utilizador.UserName}"+"|"+ $"Password:{utilizador.Password}"+"$Telefone: ";
                await _emailService.SendEmailAsync(utilizador.Email, assunto, menssagem);
            }
            else
            {
                //Email para o administrador sobre a criação de um cliente novo.
                string assunto = "Karapinha XPTO - Perfil Cliente";
                string menssagem = $"Novo cliente registado na plataforma.\n" +
                              $"Nome Completo: {utilizador.NomeCompleto}\n" +
                              $"Email: {utilizador.Email}\n" +
                              $"Telemovel: {utilizador.Telemovel}\n" +
                              $"Username: {utilizador.UserName}\n" +
                              $"BI: {utilizador.BI}\n" +
                              "Este perfil deve ser ativo.";
                await _emailService.SendEmailAsync(_administradorEmail, assunto, menssagem);
            }
            return (utilizador);
        }

        public async Task<bool> Delete(int id)
        {
            Utilizador utilizador = await _utilizadorRepository.GetById(id);
            return await _utilizadorRepository.Delete(utilizador);
        }

        public Task<List<Utilizador>> GetAll()
        {
            return _utilizadorRepository.GetAll();
        }

        public Task<Utilizador> GetById(int id)
        {
            return _utilizadorRepository.GetById(id);
        }

        public async Task<bool> Update(UtilizadorUpdateDTO utilizadorUpdateDTO)
        {
            var utilizador = await _utilizadorRepository.GetById(utilizadorUpdateDTO.Id);
            if (utilizador != null)
            {
                utilizador.NomeCompleto = utilizadorUpdateDTO.NomeCompleto;
                utilizador.Email = utilizadorUpdateDTO.Email;
                utilizador.Telemovel = utilizadorUpdateDTO.Telemovel;
                utilizador.Foto = utilizadorUpdateDTO.Foto;
                utilizador.BI = utilizadorUpdateDTO.BI;
                utilizador.UserName = utilizadorUpdateDTO.UserName;
                utilizador.Password = utilizadorUpdateDTO.Password;
                utilizador.PerfilId = utilizadorUpdateDTO.PerfilId;
                utilizador.Activar = utilizadorUpdateDTO.Activar;
                utilizador.EstadoUtilizador = utilizadorUpdateDTO.EstadoUtilizador;
                return await _utilizadorRepository.Update(utilizador);
            }
            return false;
        }

        public async Task<Utilizador?> Login(string username, string password)
        {
            var utilizador = await _utilizadorRepository.GetUserByUsername(username);

            if (utilizador == null || utilizador.Password != password){
                return null;
            }
            return utilizador;
        }
        /*public bool ConfirmarPassword(string password, Utilizador utilizadorDTO) {
            return (password == ( utilizadorDTO.Password));
        }*/

        public async Task<Utilizador> GetUserByUsername(string username)
        {
            return await _utilizadorRepository.GetUserByUsername(username);
        }

        public async Task <List<Utilizador>> GetClientes()
        {
            return await _utilizadorRepository.GetClientes();
        }

        public async Task<bool> ActivarUtilizador(int id)
        {
            var utilizador = await _utilizadorRepository.GetById(id);
            if (utilizador == null)
            {
                return false;
            }
            utilizador.Activar = true;
            return await _utilizadorRepository.Update(utilizador);
        }

        public async Task<bool> BloquearDesbloquearUtilizador(int id)
        {
            var utilizador = await _utilizadorRepository.GetById(id);
            if (utilizador == null)
            {
                return false;
            }
            utilizador.EstadoUtilizador = false;
            return await _utilizadorRepository.Update(utilizador);
        }


    }
}
