using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.Iservice;
using Kp.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HorarioController : ControllerBase
    {
        private readonly IHorarioService _horarioService;

        public HorarioController(IHorarioService horarioService)
        {
            _horarioService = horarioService;
        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _horarioService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _horarioService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _horarioService.Delete(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(HorarioAddDTO horarioAddDTO)
        {
            return Ok(await _horarioService.Create(horarioAddDTO));
        }

        [HttpPut]
        public async Task<IActionResult> Update(HorarioUpdateDTO horarioUpdateDTO)
        {
            return Ok(await _horarioService.Update(horarioUpdateDTO));
        }
    }
}
