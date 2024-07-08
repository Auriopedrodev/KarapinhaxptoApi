using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Kp.DTO;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kp.Services
{
    public class CategoriaService : ICategoriaService
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public CategoriaService(ICategoriaRepository categoriaRepository)
        {
            _categoriaRepository = categoriaRepository;
        }

        public async Task<Categoria> Create(CategoriaAddDTO categoriaAddDTO)
        {
            var categoria = new Categoria
            {
                Tipo = categoriaAddDTO.Tipo,
            };
            await _categoriaRepository.Create(categoria);
            return (categoria);
        }
            

        public async Task<bool> Delete(int id)
        {
            Categoria categoria= await _categoriaRepository.GetById(id);
                return await _categoriaRepository.Delete(categoria);
        }

        public Task<List<Categoria>> GetAll()
        {
            
            return _categoriaRepository.GetAll();
        }

        public Task<Categoria> GetById(int id)
        {
            return _categoriaRepository.GetById(id);
        }

        public async Task<bool> Update(CategoriaUpdateDTO categoriaUpdateDTO)
        {
            var categoria = await _categoriaRepository.GetById(categoriaUpdateDTO.Id);
            if(categoria != null)
            {
                categoria.Tipo= categoriaUpdateDTO.Tipo;
                return await _categoriaRepository.Update(categoria);
            }
            return false;
        }
    }
}
