using ServiceStack.DataAnnotations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class Utilizador
    {
        [Key]
        public int Id { get; set; }
        public string? NomeCompleto { get; set; }
        public string? Email { get; set; }
        public String? Telemovel { get; set; }
        public string? Foto { get; set; }
        [Unique]
        public string? BI { get; set; }
        [Unique]
        public string? UserName { get; set; }
        public string? Password { get; set; }
        public int ? PerfilId { get; set; }
        [System.ComponentModel.DataAnnotations.Schema.ForeignKey(nameof(PerfilId))]
        public Perfil ? Perfil { get; set; }  
        public bool Activar {  get; set; }
        public bool EstadoUtilizador { get; set; }
        public bool Validade {  get; set; }

    }
}
