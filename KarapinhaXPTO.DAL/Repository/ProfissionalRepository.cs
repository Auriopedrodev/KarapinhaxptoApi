using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTOContext.Model;
using Kp.DAL.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DAL.Repository
{
    public class ProfissionalRepository : GenericRepository<Profissional>, IProfissionalRepository
    {
        private readonly KarapinhaContext _KpXPTOcontext;
        public ProfissionalRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {
            _KpXPTOcontext = kpXPTOcontext;
        }

        public async Task<List<Profissional>> ListaNaoRemovidos()
        {
            return await _KpXPTOcontext.Profissionals.Where(p => p.Validade == true).ToListAsync();
        }

        /*public IEnumerable<Profissional> GetTop5Professionals()
        {
            return _KpXPTOcontext.Profissionals.Include(x => x.Categoria)
                                        .Include(x => x.HorariosProfissional.Select(y => y.HorarioId))
                                        .OrderByDescending(x => x.m.Count())
                                        .Take(5);
        }*/

        public Task<List<Profissional>> GetTop5Profissional()
        {
            return _KpXPTOcontext.Profissionals.Include(x => x.Categoria)
                                        .Include(x => x.HorariosProfissional).ThenInclude(y => y.Horario)
                                        .OrderByDescending(x => x.ListaMarcacaos.Count())
                                        .Take(5).ToListAsync();
        }
        public async Task<List<Profissional>> GetProfissionalHorarios()
        {
            return await _KpXPTOcontext.Profissionals.Include(p => p.HorariosProfissional).ThenInclude(x => x.Horario).ToListAsync();
        }

        public async Task<Profissional> GetProfissionalHorariosPorId(int profissionalId)
        {
            return await _KpXPTOcontext.Profissionals.Where(p => p.Id == profissionalId).Include(p => p.HorariosProfissional).ThenInclude(x => x.Horario).FirstAsync();
        }

        public async Task<Profissional> GetUserByUsername(string username)
        {
            return await _KpXPTOcontext.Profissionals.FirstOrDefaultAsync(u => u.UserName == username);
        }

    }

}
