using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IMarcacaoServicoService
    {
        Task<MarcacaoServico> GetById(int id);
        Task<List<MarcacaoServico>> GetAll();
        Task<bool> Update(MarcacaoServicoUpdateDTO marcacaoServicoUpdateDTO);
        Task<MarcacaoServico> Create(MarcacaoServicoAddDTO marcacaoServicoAddDTO);
        Task<bool> Delete(int id);
    }
}
