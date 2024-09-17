using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTOContext.Model;
using Kp.DAL.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DAL.Repository
{
    public class UtilizadorRepository : GenericRepository<Utilizador>, IUtilizadorRepository
    {
        private readonly KarapinhaContext _KpXPTOcontext;
        private readonly DbSet<Utilizador> _utilizadores;

        public UtilizadorRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {
            _KpXPTOcontext = kpXPTOcontext;
            _utilizadores =  kpXPTOcontext.Set<Utilizador>();
        }

        public async Task<Utilizador> GetUserByUsername(string username)
        {
            return await _KpXPTOcontext.Utilizadors.FirstOrDefaultAsync(u => u.UserName == username);
        }

        public async Task<List<Utilizador>> ListarUtilizadorParaActivar()
        {
            return await _KpXPTOcontext.Utilizadors.Where(p => p.Activar == false && p.PerfilId == 2).Include(p => p.EstadoUtilizador).Include(p => p.Perfil).ToListAsync();
        }

        public async Task<List<Utilizador>> GetClientes()
        {
            return await _KpXPTOcontext.Utilizadors.Where(u => u.PerfilId == 2).ToListAsync();
        }

        public async Task <List<Utilizador>> ListaRemovidos()
        {
            return await _KpXPTOcontext.Utilizadors.Where(p=> p.Validade == false).ToListAsync();
        }


    }

}

