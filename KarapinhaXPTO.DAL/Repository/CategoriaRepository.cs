using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTOContext.Model;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kp.DAL.Repository
{
    public class CategoriaRepository : GenericRepository<Categoria>, ICategoriaRepository
    {
        public CategoriaRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {
        }
    }
}
