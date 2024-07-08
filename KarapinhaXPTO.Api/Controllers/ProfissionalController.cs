using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.Iservice;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfissionalController : ControllerBase
    {
        private readonly IProfissionalService _profissionalService;

        public ProfissionalController(IProfissionalService profissionalService)
        {
            _profissionalService = profissionalService;
        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _profissionalService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _profissionalService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _profissionalService.Delete(id));
        }

        [HttpPost]
        [Route("/CriarProfissional")]
        public async Task<IActionResult> Create([FromForm]ProfissionalAddDTO profissionalAddDTO)
        {
            return Ok(await _profissionalService.Create(profissionalAddDTO));
        }

        [HttpPut]
        public async Task<IActionResult> Update(ProfissionalUpdateDTO profissionalUpdateDTO)
        {
            return Ok(await _profissionalService.Update(profissionalUpdateDTO));
        }
    }
}
