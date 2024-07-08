using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IMarcacaoService
    {
        Task<Marcacao> GetById(int id);
        Task<List<Marcacao>> GetAll();
        Task<bool> Update(MarcacaoUpdateDTO marcacaoUpdateDTO);
        Task<Marcacao> Create(MarcacaoAddDTO marcacaoAddDTO);
        Task<bool> Delete(int id);
    }
}
