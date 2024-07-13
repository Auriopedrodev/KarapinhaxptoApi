using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class MarcacaoService:IMarcacaoService
    {
        private readonly IMarcacaoRepository _marcacaoRepository;
        private readonly KarapinhaContext _contextMarcacao;

        public MarcacaoService(IMarcacaoRepository marcacaoRepository)
        {
            _marcacaoRepository = marcacaoRepository;
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

        public async Task<Marcacao> Create(MarcacaoAddDTO marcacaoAddDTO)
        {
            var novoPedidoMarcacao = new Marcacao
            {
                DataRegistoMarcacao = marcacaoAddDTO.DataRegistoMarcacao,
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

        public async Task<List<Get5Profissionais>> GetTop5ProfissionaisComMaisMarcacoes()
        {
            return await _contextMarcacao.MarcacoServicos
                .GroupBy(ms => ms.ProfissionalId)
                .OrderByDescending(g => g.Count())
                .Take(2)
                .Select(g => new Get5Profissionais
                {
                    Id = g.Key,
                    NomeCompleto = g.First().Profissional.NomeCompleto
                     
                })
                .ToListAsync();
        }

    }
}
