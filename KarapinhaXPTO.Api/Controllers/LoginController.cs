using KarapinhaXPTO.DTOs;
using KarapinhaXPTO.Shared.Iservice;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public readonly ILoginServices _loginService;
        public LoginController(ILoginServices loginServices) { 
            _loginService = loginServices;
        }


        /*[HttpPost("login")]
        public async Task<IActionResult> Login([FromQuery] string username, [FromQuery] string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return BadRequest("Username e password são obrigatórios");
            }

            try
            {
                await _loginService.LoginGenerico(username, password);
                return Ok(new { message = "Login realizado com sucesso" });
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized(new { message = "Credenciais inválidas" });
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, new { message = "Ocorreu um erro interno no servidor" });
            }
        }*/

        [HttpPost("login")]
        
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            if (string.IsNullOrEmpty(loginDTO.UserName) || string.IsNullOrEmpty(loginDTO.Password))
            {
                return BadRequest("Username e password são obrigatórios");
            }

            try
            {
                var loginMessage = await _loginService.LoginGenerico(loginDTO.UserName, loginDTO.Password);

                if (loginMessage.StartsWith("Falha no login"))
                {
                    return Unauthorized(new { message = loginMessage });
                }

                return Ok( loginMessage);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, new { message = "Ocorreu um erro interno no servidor" });
            }
        }




    }

}

