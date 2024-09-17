using KarapinhaXPTOContext.Model;
using Kp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface ICategoriaService
    {

        Task<Categoria> GetById(int id);

        Task<List<Categoria>> GetAll();

        Task<bool> Update(CategoriaUpdateDTO categoriaUpdateDTO);

        Task<Categoria> Create(CategoriaAddDTO categoriaAddDTO);

        Task<bool> Delete(int id);
    }
}
