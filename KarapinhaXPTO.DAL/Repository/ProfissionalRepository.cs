﻿using KarapinhaXPTO.DAL.Context;
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
    public class ProfissionalRepository : GenericRepository<Profissional>, IProfissionalRepository
    {
        public ProfissionalRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {


        }
    }
}
