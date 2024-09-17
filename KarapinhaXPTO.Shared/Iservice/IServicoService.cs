using KarapinhaXPTO.DTOs;
using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.Iservice
{
    public interface IServicoService
    {
        Task<Servico> GetById(int id);
        Task<List<Servico>> GetAll();
        Task<bool> Update(ServicoUpdateDTO servicoUpdateDTO);
        Task<Servico> Create(ServicoAddDTO servicoAddDTO);
        Task<bool> Delete(int id);
        Task<List<Servico>> ListaServicos();
        Task<bool> Remover(int id);
        Task<Servico?> GetServicoMaisSolicitado();
        Task<Servico?> GetServicoMenosSolicitado();
    }
}
