using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class UtilizadorAddDTO
    {
        public string? NomeCompleto { get; set; }
        public string? Email { get; set; }
        public String? Telemovel { get; set; }
        public string? Foto { get; set; }
        public string? BI { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
        public int? PerfilId { get; set; }
        public bool Activar { get; set; }
        public bool EstadoUtilizador { get; set; }

    }
}
