using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTOContext.Model;
using Kp.DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DAL.Repository
{
    public class PerfilRepository : GenericRepository<Perfil>, IPerfilRepository
    {
        public PerfilRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {
            

        }
    }
}
