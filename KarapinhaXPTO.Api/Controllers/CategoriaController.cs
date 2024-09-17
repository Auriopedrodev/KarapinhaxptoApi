using KarapinhaXPTO.Shared.Iservice;
using Kp.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KarapinhaXPTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly ICategoriaService _categoriaService;

        public CategoriaController(ICategoriaService categoriaService)
        {
            _categoriaService = categoriaService;
        }

        [HttpGet]
        public async Task<IActionResult> listCategoria()
        {
            return Ok(await _categoriaService.GetAll());
        }

        [HttpGet("id")]
        public async Task<IActionResult> listByIdCategoria(int id)
        {
            return Ok(await _categoriaService.GetById(id));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> DeleteCategoria(int id)
        {
            return Ok(await _categoriaService.Delete(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategoria(CategoriaAddDTO categoriaAdd)
        {
            return Ok(await _categoriaService.Create(categoriaAdd));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCategoria(CategoriaUpdateDTO categoriaUpdateDTO)
        {
            return Ok(await _categoriaService.Update(categoriaUpdateDTO));
        }
    }
}
