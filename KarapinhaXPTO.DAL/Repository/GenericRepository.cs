using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTOContext.Model;
using Kp.Shared.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kp.DAL.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {

        private readonly KarapinhaContext _KpXPTOcontext;

        public GenericRepository(KarapinhaContext kpXPTOcontext)
        {
            _KpXPTOcontext = kpXPTOcontext;
        }



        public async Task <T> Create(T entity)
        {
            /*throw new NotImplementedException();*/
            await _KpXPTOcontext.Set<T>().AddAsync(entity);
             await _KpXPTOcontext.SaveChangesAsync();
            return entity;


        }

        public async Task <bool> Delete(T entity)
        {
            /*throw new NotImplementedException();*/

            _KpXPTOcontext.Set<T>().Remove(entity);
            return await _KpXPTOcontext.SaveChangesAsync()>0;

        }

        public async Task <T> GetById(int id)
        {
            return await _KpXPTOcontext.Set<T>().FindAsync(id);
        }

        public async Task <List<T>> GetAll()
        {
            return await _KpXPTOcontext.Set<T>().ToListAsync(); 
        }

        public async Task <bool> Update(T entity)
        {
            /*throw new NotImplementedException();*/

            _KpXPTOcontext.Entry(entity).State = EntityState.Modified;
            return await _KpXPTOcontext.SaveChangesAsync() > 0;
        }


    }
}
