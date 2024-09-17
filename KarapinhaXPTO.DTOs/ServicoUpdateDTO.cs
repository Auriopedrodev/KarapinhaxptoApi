using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class ServicoUpdateDTO
    {
        public int Id { get; set; }
        public String? TipoServico { get; set; }
        public double PrecoServico { get; set; }
        public int CategoriaId { get; set; }
        public bool Validade { get; set; }
    }
}
