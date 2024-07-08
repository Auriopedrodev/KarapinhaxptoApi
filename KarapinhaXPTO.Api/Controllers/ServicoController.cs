using KarapinhaXPTO.DTOs;
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

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _servicoService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _servicoService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _servicoService.Delete(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(ServicoAddDTO servicoAddDTO)
        {
            return Ok(await _servicoService.Create(servicoAddDTO));
        }

        [HttpPut]
        public async Task<IActionResult> Update(ServicoUpdateDTO servicoUpdateDTO)
        {
            return Ok(await _servicoService.Update(servicoUpdateDTO));
        }

    }
}
