using KarapinhaXPTO.DAL.Repository;
using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class ServicoService:IServicoService
    {
        private readonly IServicoRepository _servicoRepository;

        public ServicoService(IServicoRepository servicoRepository)
        {
            _servicoRepository = servicoRepository;
        }

        public async Task<Servico> Create(ServicoAddDTO servicoAddDTO)
        {
            var servico = new Servico
            {
                TipoServico = servicoAddDTO.TipoServico,
                PrecoServico = servicoAddDTO.PrecoServico,
                CategoriaId = servicoAddDTO.CategoriaId,
                Validade = true,
            };
            await _servicoRepository.Create(servico);
            return (servico);
        }

        public async Task<bool> Delete(int id)
        {
            Servico servico = await _servicoRepository.GetById(id);
            return await _servicoRepository.Delete(servico);
        }

        public Task<List<Servico>> GetAll()
        {
            return _servicoRepository.GetAll();
        }

        public Task<Servico> GetById(int id)
        {
            return _servicoRepository.GetById(id);
        }

        public async Task<bool> Update(ServicoUpdateDTO servicoUpdateDTO)
        {
            var servico = await _servicoRepository.GetById(servicoUpdateDTO.Id);
            if (servico != null)
            {
                servico.TipoServico = servicoUpdateDTO.TipoServico;
                servico.PrecoServico = servicoUpdateDTO.PrecoServico;
                servico.CategoriaId = servicoUpdateDTO.CategoriaId;
                servico.Validade = true;
                return await _servicoRepository.Update(servico);
            }
            return false;
        }

        public async Task<List<Servico>> ListaServicos()
        {
            return await _servicoRepository.ListaServicos();
        }

        public async Task<bool> Remover(int id)
        {
            var servico = await _servicoRepository.GetById(id);

            servico.Validade = false;

            return await _servicoRepository.Update(servico);
        }

        public async Task<Servico> GetServicoMaisSolicitado()
        {
            var servico = _servicoRepository.GetServicoMaisSolicitado();
            return await servico;
        }

        public async Task<Servico> GetServicoMenosSolicitado()
        {
            var servico = _servicoRepository.GetServicoMenosSolicitado();
            return await servico;
        }


    }
}
