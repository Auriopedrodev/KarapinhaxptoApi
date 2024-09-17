using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class LoginService : ILoginServices
    {
        private readonly IUtilizadorRepository _utilizadorRepository;
        private readonly IProfissionalRepository _profissionalRepository;
        int cont =0;
        public LoginService(IUtilizadorRepository utilizadorRepository, IProfissionalRepository profissionalRepository) 
        {
            _utilizadorRepository = utilizadorRepository;
            _profissionalRepository = profissionalRepository;

        }

        /*public async Task<dynamic> LoginGenerico(string username, string password)
        {
            var profissional = await LoginProfissional(username, password);
            if (profissional != null)
            {
                return profissional;
            }
            else
            {
                var utilizador = await LoginUtilizador(username, password);
                if (utilizador != null)
                {
                    return utilizador;
                }
                else
                {
                    return "Falha no login. Usuário não encontrado ou senha incorreta.";
                }
            }
        }*/

        public async Task<dynamic> LoginGenerico(string username, string password)
        {
            var serializeOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true
            }; 

            var profissional = await LoginProfissional(username, password);
            if (profissional != null)
            {
                return JsonSerializer.Serialize (profissional, serializeOptions);
            }
            else
            {
                var utilizador = await LoginUtilizador(username, password);
                if (utilizador != null)
                {
                    return JsonSerializer.Serialize(utilizador, serializeOptions);
                }
                else
                {
                    return JsonSerializer.Serialize(new { Success = false, Message = "Falha no login. Usuário não encontrado ou senha incorreta." }, serializeOptions);
                }
            }
        }




        /*public async Task LoginGenerico(string username, string password)
        {
            var profissional = await LoginProfissional(username, password);

            if (profissional != null)
            {
                // Lógica para lidar com o login bem-sucedido de um profissional
                Console.WriteLine($"Profissional logado: {profissional.UserName}");
            }
            else
            {
                var utilizador = await LoginUtilizador(username, password);

                if (utilizador != null)
                {
                    // Lógica para lidar com o login bem-sucedido de um utilizador
                    Console.WriteLine($"Utilizador logado: {utilizador.UserName}");
                }
                else
                {
                    // Lógica para lidar com falha de login
                    Console.WriteLine("Falha no login. Usuário não encontrado ou senha incorreta.");
                }
            }
        }*/

        public async Task<Profissional> LoginProfissional(string username, string password)
        {
            var profissional = await _profissionalRepository.GetUserByUsername(username);
            if (profissional == null || profissional.Password != password && cont==3)
            {
                cont++;
                profissional.Validade = false;
                return null;
            }
            
            return profissional;
        }

      

        public async Task<Utilizador> LoginUtilizador(string username, string password)
        {
            var utilizador = await _utilizadorRepository.GetUserByUsername(username);
            if (utilizador == null || utilizador.Password != password && cont== 3)
            {
                cont++;
                utilizador.Validade = false;
                return null;
            }
            return utilizador;
        }

   
    }
}