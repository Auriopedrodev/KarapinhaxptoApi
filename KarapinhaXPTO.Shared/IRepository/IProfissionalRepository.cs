using KarapinhaXPTOContext.Model;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.IRepository
{
    public interface IProfissionalRepository : IGenericRepository<Profissional>
    {
        Task<List<Profissional>> ListaNaoRemovidos();
        Task<List<Profissional>> GetProfissionalHorarios();
        Task<Profissional> GetProfissionalHorariosPorId(int profissionalId);
        Task<Profissional> GetUserByUsername(string username);
        Task<List<Profissional>> GetTop5Profissional();
    }
}
