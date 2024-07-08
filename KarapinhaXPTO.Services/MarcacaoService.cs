using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
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

        public MarcacaoService(IMarcacaoRepository marcacaoRepository)
        {
            _marcacaoRepository = marcacaoRepository;
        }

        public async Task<Marcacao> Create(MarcacaoAddDTO marcacaoAddDTO)
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
        }

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
    }
}
