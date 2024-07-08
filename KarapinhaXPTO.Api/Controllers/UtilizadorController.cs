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
    public class UtilizadorController : ControllerBase
    {
        private readonly IUtilizadorService _utilizadorService;

        public UtilizadorController(IUtilizadorService utilizadorService)
        {
            _utilizadorService = utilizadorService;

        }

        [HttpGet]
        public async Task<IActionResult> list()
        {
            return Ok(await _utilizadorService.GetAll());
        }

        [HttpGet]
        [Route ("/listUtilizadorbyId")]
        public async Task<IActionResult> listById(int id)
        {
            return Ok(await _utilizadorService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _utilizadorService.Delete(id));
        }

        [HttpPost("CriarUtilizador")]
        public async Task<IActionResult> Create([FromForm]UtilizadorAddDTO utilizadorAddDTO, IFormFile foto)
        {

            return Ok(await _utilizadorService.Create(utilizadorAddDTO, foto));
        }

        [HttpPut]
        public async Task<IActionResult> Update(UtilizadorUpdateDTO utilizadorUpdateDTO)
        {
            return Ok(await _utilizadorService.Update(utilizadorUpdateDTO));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            if (loginDTO == null || string.IsNullOrEmpty(loginDTO.UserName) || string.IsNullOrEmpty(loginDTO.Password))
            {
                return BadRequest("Invalid login request");
            }

            var utilizador = await _utilizadorService.Login(loginDTO.UserName, loginDTO.Password);

            if (utilizador == null)
            {
                return Unauthorized("Invalid username or password");
            }

            return Ok(new
            {
                Id = utilizador.Id,
                Email = utilizador.Email,
                Telemovel = utilizador.Telemovel,
                Username = utilizador.UserName,
                PerfilId = utilizador.PerfilId,
                Activar = utilizador.Activar,
                EstadoDoUtilizador = utilizador.EstadoUtilizador

            });
        }

        [HttpPut("AtivarUtilizador")]
        public async Task<ActionResult> AtivarUtilizador(int id)
        {
             return Ok(await _utilizadorService.ActivarUtilizador(id));
        }


        [HttpPut("BloquearDesbloaquerUtilizador")]
        public async Task<ActionResult> BloquearDesbloaquerUtilizador(int id)
        {
            return Ok(await _utilizadorService.BloquearDesbloquearUtilizador(id));
        }

        [HttpGet("GetAllClientes")]

        public async Task <ActionResult<Utilizador>> GetAllClient()
        {
            var clientes = await _utilizadorService.GetClientes();
            return Ok(clientes);
            
        }
    }
}
