using KarapinhaXPTOContext.Model;
using Kp.Shared.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Shared.IRepository
{
    public interface IMarcacaoRepository : IGenericRepository<Marcacao>
    {
        /*public async Task<List<Marcacao>> ListarAllMarcacao();
        Task <double> GetValorFaturadoMesPassado();
        Task<double> GetValorFaturadoMesCorrente();
        Task<double> GetValorFaturadoOntem();
        double GetValorFaturadoHoje();*/
        Task<List<Marcacao>> GetMarcacaoListaServico();
        double GetFacturacaoDia(DateTime day);
        double GetFacturacaoMensal(int month, int year);
      
    }

}
