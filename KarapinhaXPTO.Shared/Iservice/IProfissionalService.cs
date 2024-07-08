using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IProfissionalService
    {

        Task<Profissional> GetById(int id);

        Task<List<Profissional>> GetAll();

        Task<bool> Update(ProfissionalUpdateDTO profissionalUpdateDTO);

        Task<Profissional> Create(ProfissionalAddDTO profissionalAddDTO);

        Task<bool> Delete(int id);
    }
}
