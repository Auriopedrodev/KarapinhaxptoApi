using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface ILoginServices
    {

        /*Task LoginGenerico(string username, string password);*/
        Task<dynamic> LoginGenerico(string username, string password);
        Task<Profissional> LoginProfissional(string username, string password);
        Task<Utilizador> LoginUtilizador(string username, string password);


       /* Task<T> Login<T>(string username, string password);*/
    }
}
