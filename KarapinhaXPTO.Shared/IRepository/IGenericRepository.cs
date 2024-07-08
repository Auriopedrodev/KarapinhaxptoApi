using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kp.Shared.IRepository
{
    public interface IGenericRepository<T> where  T : class
    {

        Task <T> GetById(int id);

        Task <T> Create (T entity);

        Task <bool> Delete (T entity);

        Task <bool> Update (T entity);

        Task <List <T>>GetAll ();


    }
}
