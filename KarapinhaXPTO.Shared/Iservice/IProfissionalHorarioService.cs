using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IProfissionalHorarioService
    {
        Task<ProfissionalHorario> GetById(int id);

        Task<List<ProfissionalHorario>> GetAll();

        Task<bool> Update(ProfissionalHorarioUpdateDTO profissionalHorarioUpdateDTO);

        Task<ProfissionalHorario> Create(ProfissionalHorarioAddDTO profissionalHorarioAddDTO);

        Task<bool> Delete(int id);

    }
}
