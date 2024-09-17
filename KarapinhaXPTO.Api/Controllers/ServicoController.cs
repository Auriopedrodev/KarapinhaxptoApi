using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.Iservice;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicoController : ControllerBase
    {
        private readonly IServicoService _servicoService;
        public ServicoController(IServicoService servicoService)
        {
            _servicoService = servicoService;
        }

        [HttpGet("ListarAllServicos")]
        public async Task<IActionResult> list()
        {
            return Ok(await _servicoService.GetAll());
        }

        [HttpGet("ListarServicosById")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _servicoService.GetById(id));
        }

        [HttpDelete("ApagarServicosById")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _servicoService.Delete(id));
        }

        [HttpPost ("CriarServicos")]
        public async Task<IActionResult> Create(ServicoAddDTO servicoAddDTO)
        {
            return Ok(await _servicoService.Create(servicoAddDTO));
        }

        [HttpPut ("ActilizarServico")]
        public async Task<IActionResult> Update(ServicoUpdateDTO servicoUpdateDTO)
        {
            return Ok(await _servicoService.Update(servicoUpdateDTO));
        }

        [HttpDelete("RemoverUtilizador")]
        public async Task<ActionResult> Remover(int id)
        {
            return Ok(await _servicoService.Remover(id));
        }

        [HttpGet("ListaServicos")]
        public async Task<IActionResult> ListaServicos()
        {
            return Ok(await _servicoService.ListaServicos());
        }

        [HttpGet("ServicoMaisSolicitados")]
        public async Task<IActionResult> GetServicoMaisSolicitado()
        {
            var servico = _servicoService.GetServicoMaisSolicitado();
            return Ok(await servico);
        }

        [HttpGet, Route("ServicoMenosSolicitados")]
        public async Task<IActionResult> GetServicoMenosSolicitado()
        {
            var servico = _servicoService.GetServicoMenosSolicitado();
            return Ok(await servico);
        }


    }
}
