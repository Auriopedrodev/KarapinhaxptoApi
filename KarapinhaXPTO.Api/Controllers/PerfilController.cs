using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.Iservice;
using Kp.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilController : ControllerBase
    {
        private readonly IPerfilService _perfilService;

        public PerfilController(IPerfilService perfilService)
        {
            _perfilService = perfilService;
        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _perfilService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _perfilService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _perfilService.Delete(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(PerfilAddDTO perfilAdd)
        {
            return Ok(await _perfilService.Create(perfilAdd));
        }

        [HttpPut]
        public async Task<IActionResult> Update(PerfilUpdateDTO perfilUpdateDTO)
        {
            return Ok(await _perfilService.Update(perfilUpdateDTO));
        }
    }
}
