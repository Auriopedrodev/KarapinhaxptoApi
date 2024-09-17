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
    public class ServicoRepository : GenericRepository<Servico>, IServicoRepository
    {
        private readonly KarapinhaContext _KpXPTOcontext;
        public ServicoRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {
            _KpXPTOcontext = kpXPTOcontext;

        }

        public async Task<List<Servico>> ListaServicos()
        {
            return await _KpXPTOcontext.Servicos.Where(p => p.Validade == true).ToListAsync();
        }

        public async Task <Servico?>  GetServicoMaisSolicitado()
        {
            return _KpXPTOcontext.Servicos.Include(x => x.Categoria)
                                         .OrderByDescending(x => x.ListaMarcacaos.Count())
                                         .FirstOrDefault();
        }

        public async Task<Servico?> GetServicoMenosSolicitado()
        {
            return _KpXPTOcontext.Servicos.Include(x => x.Categoria)
                                         .OrderBy(x => x.ListaMarcacaos.Count())
                                         .FirstOrDefault();
        }

    }
}
