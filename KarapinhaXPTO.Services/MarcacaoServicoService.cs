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
    public class MarcacaoServicoService : IMarcacaoServicoService
    {

            private readonly IMarcacaoServicoRepository _marcacaoServicoRepository;

            public MarcacaoServicoService(IMarcacaoServicoRepository marcacaoServicoRepository)
            {
                _marcacaoServicoRepository = marcacaoServicoRepository;
            }

            public async Task<MarcacaoServico> Create(MarcacaoServicoAddDTO marcacaoServicoAddDTO)
            {
                var marcacaoServico = new MarcacaoServico
                {
                    ServicoId = marcacaoServicoAddDTO.ServicoId,
                    CategoriaId = marcacaoServicoAddDTO.CategoriaId,
                    ProfissionalId = marcacaoServicoAddDTO.ProfissionalId,
                    
                    DataMarcacaoServico = marcacaoServicoAddDTO.DataMarcacaoServico,
                    Hora = marcacaoServicoAddDTO.Hora,

                };
                await _marcacaoServicoRepository.Create(marcacaoServico);
                return (marcacaoServico);
            }

            public async Task<bool> Delete(int id)
            {
                MarcacaoServico marcacaoServico = await _marcacaoServicoRepository.GetById(id);
                return await _marcacaoServicoRepository.Delete(marcacaoServico);
            }

            public Task<List<MarcacaoServico>> GetAll()
            {
                return _marcacaoServicoRepository.GetAll();
            }

            public Task<MarcacaoServico> GetById(int id)
            {
                return _marcacaoServicoRepository.GetById(id);
            }

            public async Task<bool> Update(MarcacaoServicoUpdateDTO marcacaoServicoUpdateDTO)
            {
                var marcacaoServico = await _marcacaoServicoRepository.GetById(marcacaoServicoUpdateDTO.Id);
                if (marcacaoServico != null)
                {
                    marcacaoServico.ServicoId = marcacaoServicoUpdateDTO.ServicoId;
                    marcacaoServico.ProfissionalId = marcacaoServicoUpdateDTO.ProfissionalId;
                    marcacaoServico.MarcacaoId = marcacaoServicoUpdateDTO.MarcacaoId;
                    marcacaoServico.DataMarcacaoServico = marcacaoServicoUpdateDTO.DataMarcacaoServico;
                    marcacaoServico.Hora = marcacaoServicoUpdateDTO.Hora;
                    return await _marcacaoServicoRepository.Update(marcacaoServico);
                }
                return false;
            }
        

    }
}
