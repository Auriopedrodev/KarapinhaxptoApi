using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTOContext.Model;
using Kp.DAL.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DAL.Repository
{
    public class MarcacaoRepository : GenericRepository<Marcacao>, IMarcacaoRepository
    {
        private readonly KarapinhaContext _KpXPTOcontext;
        public MarcacaoRepository(KarapinhaContext kpXPTOcontext) : base(kpXPTOcontext)
        {
            _KpXPTOcontext = kpXPTOcontext;
        }

        public double GetFacturacaoDia(DateTime day)
        {
            return _KpXPTOcontext.Marcacaos
                          .Where(x => x.DataRegistoMarcacao.Date == day.Date && x.EstadoMarcacao == true)
                          .Sum(x => (double?)x.Pagamento) ?? 0;
        }

        public double GetFacturacaoMensal(int month, int year)
        {
            return _KpXPTOcontext.Marcacaos
                          .Where(x => x.DataRegistoMarcacao.Month == month && x.DataRegistoMarcacao.Year == year && x.EstadoMarcacao == true)
                          .Sum(x => (double?)x.Pagamento) ?? 0;
        }

        public async Task<List<Marcacao>> GetMarcacaoListaServico()
        {
            return await _KpXPTOcontext.Marcacaos.Include(u => u.Utilizador).Include(l => l.ListaMarcacaoServico).ToListAsync();

        }



        /*public async Task<List<Marcacao>> GetMarcacaoListaServico()
        {
            return await _KpXPTOcontext.Marcacaos.Include(l => l.ListaMarcacaoServico).ThenInclude(p => p.Servico)
                                                   .Include(l => l.ListaMarcacaoServico).ThenInclude(c => c.Categoria)
                                                   .Include(l => l.ListaMarcacaoServico).ThenInclude(p => p.Profissional).ToListAsync();
                                                   
        }*/


        // Método para calcular o valor faturado no dia corrente
        /*public double GetValorFaturadoHoje()
        {
            var hoje = DateTime.Today.Date;
            
            return _KpXPTOcontext.Marcacaos
                .Where(m => m.DataRegistoMarcacao.Date == hoje && m.EstadoMarcacao)
                .Sum(m => m.Pagamento);

        }

        // Método para calcular o valor faturado ontem
        public async Task<double> GetValorFaturadoOntem()
        {
            var ontem = DateTime.Today.AddDays(-1);
            return await Task.FromResult(_KpXPTOcontext.Marcacaos
                .Where(m => m.DataRegistoMarcacao.Date == ontem && m.EstadoMarcacao)
                .Sum(m => m.Pagamento));
        }

        // Método para calcular o valor faturado no mês corrente
        public async Task<double> GetValorFaturadoMesCorrente()
        {
            var mesCorrente = DateTime.Today.Month;
            var anoCorrente = DateTime.Today.Year;
            return await Task.FromResult(_KpXPTOcontext.Marcacaos
                .Where(m => m.DataRegistoMarcacao.Month == mesCorrente && m.DataRegistoMarcacao.Year == anoCorrente && m.EstadoMarcacao)
                .Sum(m => m.Pagamento));
        }

        // Método para calcular o valor faturado no mês passado
        public async Task<double> GetValorFaturadoMesPassado()
        {
            var mesPassado = DateTime.Today.AddMonths(-1).Month;
            var ano = DateTime.Today.AddMonths(-1).Year;
            return await Task.FromResult(_KpXPTOcontext.Marcacaos
                .Where(m => m.DataRegistoMarcacao.Month == mesPassado && m.DataRegistoMarcacao.Year == ano && m.EstadoMarcacao)
                .Sum(m => m.Pagamento));
        }*/



    }
}
