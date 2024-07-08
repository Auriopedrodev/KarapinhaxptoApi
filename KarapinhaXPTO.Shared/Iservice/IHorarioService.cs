using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IHorarioService
    {
        Task<Horario> GetById(int id);
        Task<List<Horario>> GetAll();
        Task<bool> Update(HorarioUpdateDTO horarioUpdateDTO);
        Task<Horario> Create(HorarioAddDTO horarioAddDTO);
        Task<bool> Delete(int id);

    }
}
