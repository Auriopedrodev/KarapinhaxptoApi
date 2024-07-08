using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class ProfissionalAddDTO
    {
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public string BI { get; set; }
        public string Foto { get; set; }
        public String Telefone { get; set; }
        public int CategoriaId { get; set; }
        public List<int> Horarios { get; set;}
        
    }
}
