using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class ServicoAddDTO
    {
        public String? TipoServico { get; set; }
        public double PrecoServico { get; set; }
        public int CategoriaId { get; set; }
    }
}
