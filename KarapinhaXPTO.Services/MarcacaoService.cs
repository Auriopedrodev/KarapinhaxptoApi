using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.DAL.Repository;
using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class MarcacaoService : IMarcacaoService
    {
        private readonly KarapinhaContext _KpXPTOcontext;
        private readonly IMarcacaoRepository _marcacaoRepository;
        private readonly KarapinhaContext _contextMarcacao;
        private readonly IEmailService _emailService;
        private readonly IMarcacaoServicoRepository _marcacaoServicoRepository;

        public MarcacaoService(IMarcacaoRepository marcacaoRepository, IMarcacaoServicoRepository marcacaoServicoRepository, KarapinhaContext kpXPTOcontext)
        {
            _marcacaoRepository = marcacaoRepository;
            _marcacaoServicoRepository = marcacaoServicoRepository;
            _KpXPTOcontext = kpXPTOcontext;
        }

        /*public async Task<Marcacao> Create(MarcacaoAddDTO marcacaoAddDTO)
        {
            var marcacao = new Marcacao
            {
                DataRegistoMarcacao = marcacaoAddDTO.DataRegistoMarcacao,
                Pagamento = marcacaoAddDTO.Pagamento,
                EstadoMarcacao = marcacaoAddDTO.EstadoMarcacao,
                UtilizadorId = marcacaoAddDTO.UtilizadorId,

            };
            await _marcacaoRepository.Create(marcacao);
            return (marcacao);
        }*/

        public async Task<bool> Delete(int id)
        {
            Marcacao marcacao = await _marcacaoRepository.GetById(id);
            return await _marcacaoRepository.Delete(marcacao);
        }

        public Task<List<Marcacao>> GetAll()
        {
            return _marcacaoRepository.GetAll();
        }

        public Task<Marcacao> GetById(int id)
        {
            return _marcacaoRepository.GetById(id);
        }

      public async Task<bool> Update(MarcacaoUpdateDTO marcacaoUpdateDTO)
        {
            var marcacao = await _marcacaoRepository.GetById(marcacaoUpdateDTO.Id);
            if (marcacao != null)
            {
                
                marcacao.DataRegistoMarcacao = marcacaoUpdateDTO.DataRegistoMarcacao;
                marcacao.Pagamento = marcacaoUpdateDTO.Pagamento;
                marcacao.EstadoMarcacao = marcacaoUpdateDTO.EstadoMarcacao;
                marcacao.UtilizadorId = marcacaoUpdateDTO.UtilizadorId;
                return await _marcacaoRepository.Update(marcacao);
            }
            return false;
        }

         /* public async Task<bool> Update(MarcacaoUpdateDTO marcacaoUpdateDTO)
        {
            var marcacao = await _marcacaoRepository.GetById(marcacaoUpdateDTO.Id);
            if (marcacao != null)
            {
                marcacao.DataRegistoMarcacao = marcacaoUpdateDTO.DataRegistoMarcacao;
                marcacao.Pagamento = marcacaoUpdateDTO.Pagamento;
                marcacao.EstadoMarcacao = marcacaoUpdateDTO.EstadoMarcacao;
                marcacao.UtilizadorId = marcacaoUpdateDTO.UtilizadorId;
            }

            foreach (var marcacaoServicoUptadeDTO in marcacaoUpdateDTO.ListaMarcacaoServico)
            {
                var novoMarcacaoServico = new MarcacaoServico
                {
                    ServicoId = marcacaoServicoUptadeDTO.ServicoId,
                    CategoriaId = marcacaoServicoUptadeDTO.CategoriaId,
                    ProfissionalId = marcacaoServicoUptadeDTO.ProfissionalId,
                    DataMarcacaoServico = marcacaoServicoUptadeDTO.DataMarcacaoServico,
                    Hora = marcacaoServicoUptadeDTO.Hora
                };

            }
            marcacao.ListaMarcacaoServico.Add(novoMarcacaoServico);
            return await _marcacaoRepository.Update(marcacao);

        }*/

        public async Task<Marcacao> Create(MarcacaoAddDTO marcacaoAddDTO)
        {
            var novoPedidoMarcacao = new Marcacao
            {
                DataRegistoMarcacao = DateTime.Now.Date,
                Pagamento = marcacaoAddDTO.Pagamento,
                EstadoMarcacao = false,
                UtilizadorId = marcacaoAddDTO.UtilizadorId,
                ListaMarcacaoServico = new List<MarcacaoServico>()
            };

            foreach (var marcacaoServicoAddDTO in marcacaoAddDTO.ListaMarcacaoServico)
            {
                var novoMarcacaoServico = new MarcacaoServico
                {
                    ServicoId = marcacaoServicoAddDTO.ServicoId,
                    CategoriaId = marcacaoServicoAddDTO.CategoriaId,
                    ProfissionalId = marcacaoServicoAddDTO.ProfissionalId,

                    DataMarcacaoServico = marcacaoServicoAddDTO.DataMarcacaoServico,
                    Hora = marcacaoServicoAddDTO.Hora
                };

                novoPedidoMarcacao.ListaMarcacaoServico.Add(novoMarcacaoServico);
            }
            return await _marcacaoRepository.Create(novoPedidoMarcacao);
        }

        /*public async Task<List<Get5Profissionais>> GetTop5ProfissionaisComMaisMarcacoes()
        {
            return await _contextMarcacao.MarcacaoServicos
                .GroupBy(ms => ms.ProfissionalId)
                .OrderByDescending(g => g.Count())
                .Take(2)
                .Select(g => new Get5Profissionais
                {
                    Id = g.Key,
                    NomeCompleto = g.First().Profissional.NomeCompleto

                })
                .ToListAsync();
        }*/
        public async Task<bool> ConfirmarMarcacao(int id)
        {
            var marcacao = await _marcacaoRepository.GetById(id);
            var marcacaoServico = await _marcacaoServicoRepository.GetById(marcacao.Id);
            if (marcacao == null)
            {
                return false;
            }

            if (marcacao.EstadoMarcacao == false)
            {
                marcacao.EstadoMarcacao = true;
                /*string assunto = "Karapinha XPTO - Investe em si";
                string menssagem = "A sua marcação foi confirmada.\n" +
                                $"Dados \n" +
                                $"Data :{marcacao.DataRegistoMarcacao}" +
                                $"Pagamento :{marcacao.Pagamento}" +
                                 $"Tipo :{marcacaoServico.DataMarcacaoServico}"+
                                 $"Servico :{marcacaoServico.Hora}";
                await _emailService.SendEmailAsync(marcacao.Utilizador.Email, assunto, menssagem);*/
            }
            return await _marcacaoRepository.Update(marcacao);
        }

        /*public async Task<bool> ReagendarMarcacao(MarcacaoReagendarDTO marcacaoReagendarDTO)
        {

            var reagendarMarcacao = await _marcacaoRepository.GetById(marcacaoReagendarDTO.Id);
            if (reagendarMarcacao != null)
            {
                return false;
            }

            foreach (var marcacaoServicoUptadeDTO in marcacaoReagendarDTO.ListaMarcacaoServico)
            {
                var novoMarcacaoServico = new MarcacaoServico
                {
                    DataMarcacaoServico = marcacaoServicoUptadeDTO.DataMarcacaoServico,
                };
                reagendarMarcacao.ListaMarcacaoServico.Add(novoMarcacaoServico);
            }

            return await _marcacaoRepository.Update(reagendarMarcacao);

        }*/


        /*public async Task<bool> ReagendarMarcacao(MarcacaoUpdateDTO update)
        {
            var marcacao = await _marcacaoRepository.GetById(update.Id);
            if (marcacao == null)
            {
                return false;
            }

            // Atualiza a lista de MarcacaoServico
            foreach (var servicoUpdate in update.ListaMarcacaoServico)
            {
                var marcacaoServico = await _marcacaoServicoRepository.GetById(servicoUpdate.Id);
                if (marcacaoServico != null)
                {
               
                    marcacaoServico.DataMarcacaoServico = servicoUpdate.DataMarcacaoServico;

                    await _marcacaoServicoRepository.Update(marcacaoServico);
                }
               
            }

            return await _marcacaoRepository.Update(marcacao);
        }*/

        /*public async Task<bool> ReagendarMarcacao(MarcacaoRegendarDTO marcacaoUpdateDTO)
        {
            var marcacao = await _marcacaoRepository.GetById(marcacaoUpdateDTO.Id);
            foreach (var marcacaoServicoUptadeDTO in marcacaoUpdateDTO.ListaMarcacaoServico)
            {
                var reagendarMarcacao = await _marcacaoServicoRepository.GetById(marcacaoServicoUptadeDTO.Id);
                if (reagendarMarcacao != null)
                {
                   reagendarMarcacao.DataMarcacaoServico = marcacaoServicoUptadeDTO.DataMarcacaoServico;
                   await _marcacaoServicoRepository.Update(reagendarMarcacao);
                }

            }
            return await _marcacaoRepository.Update(marcacao);
        
        }
         

        public bool verificarEstado(MarcacaoUpdateDTO marcacaoUpdateDTO)
        {
            var estadoServico = false;

            var reagendarMarcacao = _marcacaoRepository.GetById(marcacaoUpdateDTO.Id);

            for (var i=0; i< marcacaoUpdateDTO.ListaMarcacaoServico.Count; i++){

                 
                
                if(reagendarMarcacao == m)

            }
        }*/

        public async Task<bool> ReagendarMarcacao(MarcacaoReagendarDTO marcacaoReagendarDTO)
        {
            var marcacao = await _KpXPTOcontext.Marcacaos
                .Include(m => m.ListaMarcacaoServico)
                .FirstOrDefaultAsync(m => m.Id == marcacaoReagendarDTO.IdMarcacao);

            if (marcacao == null)
            {
                return false;
            }

            var servico = marcacao.ListaMarcacaoServico
                .FirstOrDefault(ms => ms.ServicoId == marcacaoReagendarDTO.IdServico);

            if (servico == null)
            {
                return false;
            }

            //Atulização Servico
            servico.DataMarcacaoServico = marcacaoReagendarDTO.DataMarcacaoServico;

            _KpXPTOcontext.MarcacaoServicos.Update(servico);
            await _KpXPTOcontext.SaveChangesAsync();

            return true;
        }

        public async Task<List<Marcacao>> GetMarcacaoListaServicos()
        {
            return await _marcacaoRepository.GetMarcacaoListaServico();
        }

        public double GetFacturacaoDia(DateTime day)
        {
            return _marcacaoRepository.GetFacturacaoDia(day);
        }

        public double GetFacturacaoMensal(int month, int year)
        {
            return _marcacaoRepository.GetFacturacaoMensal(month, year);
        }

        public double GetFacturacaoOntem()
        {
            var yesterday = DateTime.Today.AddDays(-1);
            return GetFacturacaoDia(yesterday);
        }

        public double GetFacturacaoMesCorrente()
        {
            var now = DateTime.Now;
            return GetFacturacaoMensal(now.Month, now.Year);
        }

        public double GetFacturacaoMesPassado()
        {
            var now = DateTime.Now;
            var lastMonth = now.AddMonths(-1);
            return GetFacturacaoMensal(lastMonth.Month, lastMonth.Year);
        }


        /*public async Task<double> GetValorFaturadoMesPassado()
        {
            return await _marcacaoRepository.GetValorFaturadoMesPassado();
        }
        public async Task<double> GetValorFaturadoMesCorrente()
        {
            return await _marcacaoRepository.GetValorFaturadoMesCorrente();
        }
        public async Task<double> GetValorFaturadoOntem()
        {
            return await _marcacaoRepository.GetValorFaturadoOntem();
        }
        public double GetValorFaturadoHoje()
        {
            return  _marcacaoRepository.GetValorFaturadoHoje();
        }*/

        



    }
}
