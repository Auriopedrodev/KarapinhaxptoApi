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
  
        Task<bool> ConfirmarMarcacao(int id);

        /*
         *       Task<List<Get5Profissionais>> GetTop5ProfissionaisComMaisMarcacoes();
         * Task<double> GetValorFaturadoMesPassado();
        Task<double> GetValorFaturadoMesCorrente();
        Task<double> GetValorFaturadoOntem();
        double GetValorFaturadoHoje();*/
        /*Task<bool> ReagendarMarcacao(MarcacaoUpdateDTO update);*/

        /*Task<bool> ReagendarMarcacao(int marcacaoId, List<MarcacaoReagendarDTO> marcacaoRegendarDTO);*/
        Task<bool> ReagendarMarcacao(MarcacaoReagendarDTO marcacaoReagendarDTO);
        Task<List<Marcacao>> GetMarcacaoListaServicos();
        double GetFacturacaoDia(DateTime day);
        double GetFacturacaoMensal(int month, int year);
        double GetFacturacaoOntem();
        double GetFacturacaoMesCorrente();
        double GetFacturacaoMesPassado();
    }
}
