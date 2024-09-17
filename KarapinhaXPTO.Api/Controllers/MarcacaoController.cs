using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcacaoController : ControllerBase
    {
        private readonly IMarcacaoService _marcacaoService;

        public MarcacaoController(IMarcacaoService marcacaoService)
        {
            _marcacaoService = marcacaoService;
        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _marcacaoService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _marcacaoService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _marcacaoService.Delete(id));
        }

        [HttpPost("registarMarcacao")]
        public async Task<IActionResult> Create([FromBody]MarcacaoAddDTO marcacaoAddDTO)
        {
            return Ok(await _marcacaoService.Create(marcacaoAddDTO));
        }

        [HttpPut ("actualizarMarcacao")]
        public async Task<IActionResult> Update(MarcacaoUpdateDTO marcacaoUpdateDTO)
        {
            return Ok(await _marcacaoService.Update(marcacaoUpdateDTO));
        }

        /*[HttpGet("top5-profissionais")]
        public async Task<IActionResult> GetTop5ProfissionaisComMaisMarcacoes()
        {
            var top5Profissionais = await _marcacaoService.GetTop5ProfissionaisComMaisMarcacoes();
            return Ok(top5Profissionais);
        }*/

        [HttpPut("confirmarMarcacao")]
        public async Task<IActionResult> ConfirmarMarcacao(int id)
        {
            return Ok(await _marcacaoService.ConfirmarMarcacao(id));
        }

        [HttpGet("ListarMarcacaosServicos")]
        public async Task<IActionResult> GetMarcacaoListaServico()
        {
            return Ok(await _marcacaoService.GetMarcacaoListaServicos());
        }

        /*[HttpPut("ReagendarMarcacao")]
  
        public async Task<IActionResult> ReagendarMarcacao(MarcacaoUpdateDTO update)
        {
            return Ok(await _marcacaoService.ReagendarMarcacao(update));
        }*/



        [HttpGet("GetFacturacaoDia")]
        public ActionResult GetFacturacaoHoje()
        {
            var revenue = _marcacaoService.GetFacturacaoDia(DateTime.Today);
            return Ok(revenue);
        }

        [HttpGet("GetFacturacaoOntem")]
        public ActionResult GetFacturacaoOntem()
        {
            var revenue = _marcacaoService.GetFacturacaoOntem();
            return Ok(revenue);
        }

        [HttpGet("GetFacturacaoMesCorrente")]
        public ActionResult GetFacturacaoMesCorrente()
        {
            var revenue = _marcacaoService.GetFacturacaoMesCorrente();
            return Ok(revenue);
        }

        [HttpGet, Route("GetFacturacaoMesPassado")]
        public ActionResult GetFacturacaoMesPassado()
        {
            var revenue = _marcacaoService.GetFacturacaoMesPassado();
            return Ok(revenue);
        }

        [HttpPut("ReagendarMarcacaoServico")]
        public async Task<IActionResult> ReagendarMarcacao( MarcacaoReagendarDTO marcacaoReagendarDTO)
        {
            var result = await _marcacaoService.ReagendarMarcacao(marcacaoReagendarDTO);

            if (!result)
            {
                return NotFound("Marcação ou serviço não encontrado.");
            }

            return Ok("Serviço da marcação reagendado com sucesso.");
        }

    }
}

