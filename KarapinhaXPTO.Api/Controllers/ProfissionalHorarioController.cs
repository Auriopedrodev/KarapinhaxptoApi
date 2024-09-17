using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.Iservice;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfissionalHorarioController : ControllerBase
    {
        private readonly IProfissionalHorarioService _profissionalHorarioService;

        public ProfissionalHorarioController(IProfissionalHorarioService profissionalHorarioService)
        {
            _profissionalHorarioService = profissionalHorarioService;
        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _profissionalHorarioService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _profissionalHorarioService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _profissionalHorarioService.Delete(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(ProfissionalHorarioAddDTO profissionalHorarioAddDTO)
        {
            return Ok(await _profissionalHorarioService.Create(profissionalHorarioAddDTO));
        }

        [HttpPut]
        public async Task<IActionResult> Update(ProfissionalHorarioUpdateDTO profissionalHorarioUpdateDTO)
        {
            return Ok(await _profissionalHorarioService.Update(profissionalHorarioUpdateDTO));
        }
    }
}
