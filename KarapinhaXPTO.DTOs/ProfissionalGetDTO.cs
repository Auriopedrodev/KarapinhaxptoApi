using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class ProfissionalGetDTO
    {
        public int Id { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public string BI { get; set; }
        public string Foto { get; set; }
        public String Telefone { get; set; }
        public int CategoriaId { get; set; }
        public List<int> HorariosProfissional { get; set; }
    }
}
