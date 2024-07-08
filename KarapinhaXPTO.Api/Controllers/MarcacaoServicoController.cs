using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.Iservice;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcacaoServicoController : ControllerBase
    {
        private readonly IMarcacaoServicoService _marcacaoServicoService;

        public MarcacaoServicoController(IMarcacaoServicoService marcacaoServicoService)
        {
            _marcacaoServicoService = marcacaoServicoService;
        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _marcacaoServicoService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _marcacaoServicoService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _marcacaoServicoService.Delete(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(MarcacaoServicoAddDTO marcacaoServicoAddDTO)
        {
            return Ok(await _marcacaoServicoService.Create(marcacaoServicoAddDTO));
        }

        [HttpPut]
        public async Task<IActionResult> Update(MarcacaoServicoUpdateDTO marcacaoServicoUpdateDTO)
        {
            return Ok(await _marcacaoServicoService.Update(marcacaoServicoUpdateDTO));
        }
    }

}

