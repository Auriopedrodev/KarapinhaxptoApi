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
        public async Task<IActionResult> Create([FromForm]ProfissionalAddDTO profissionalAddDTO, IFormFile foto)
        {
            return Ok(await _profissionalService.Create(profissionalAddDTO, foto));
        }

        [HttpPut]
        public async Task<IActionResult> Update(ProfissionalUpdateDTO profissionalUpdateDTO, IFormFile foto)
        {
            return Ok(await _profissionalService.Update(profissionalUpdateDTO, foto));
        }

        [HttpDelete("RemoverProfissional")]
        public async Task<ActionResult> Remover(int id)
        {
            return Ok(await _profissionalService.Remover(id));
        }


        [HttpGet("ListaProfissional")]
        public async Task<IActionResult> ListaNaoRemovidos()
        {
            return Ok(await _profissionalService.ListaNaoRemovidos());
        }

        [HttpGet("profissionalHorario")]
		public async Task<IActionResult> GetProfissionalHorario()
		{
			return Ok(await _profissionalService.GetProfissionalHorario());
		}

        [HttpGet("profissionalHorarioPorId")]
        public async Task<IActionResult> GetProfissionalHorario([FromQuery] int profissionalId)
        {
            return Ok(await _profissionalService.GetProfissionalHorarioPorId(profissionalId));
        }
        [HttpGet("GetTop5Profissionais")]
        public async Task <IActionResult> GetTop5Professionals()
        {
            var professionals = await _profissionalService.GetTop5Profissional();
            return Ok(professionals);
        }

        /*[HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            if (loginDTO == null || string.IsNullOrEmpty(loginDTO.UserName) || string.IsNullOrEmpty(loginDTO.Password))
            {
                return BadRequest("Invalid login request");
            }

            var profissional = await _profissionalService.Login(loginDTO.UserName, loginDTO.Password);

            if (profissional == null)
            {
                return Unauthorized("Invalid username or password");
            }

            return Ok(new
            {
                Id= profissional.Id,
                NomeCompleto = profissional.NomeCompleto,
                Email = profissional.Email,
                BI = profissional.BI,
                Telefone = profissional.Telefone,
                CategoriaId = profissional.CategoriaId,
                Validade = profissional.Validade,
                PerfilId = profissional.PerfilId,
                UserName = profissional.UserName,
            });
        }*/

    }
}
