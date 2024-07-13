using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.Iservice;
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

        [HttpPost]
        public async Task<IActionResult> Create(MarcacaoAddDTO marcacaoAddDTO)
        {
            return Ok(await _marcacaoService.Create(marcacaoAddDTO));
        }

        [HttpPut]
        public async Task<IActionResult> Update(MarcacaoUpdateDTO marcacaoUpdateDTO)
        {
            return Ok(await _marcacaoService.Update(marcacaoUpdateDTO));
        }

        [HttpGet("top5-profissionais")]
        public async Task<IActionResult> GetTop5ProfissionaisComMaisMarcacoes()
        {
            var top5Profissionais = await _marcacaoService.GetTop5ProfissionaisComMaisMarcacoes();
            return Ok(top5Profissionais);
        }
    }
}

