using KarapinhaXPTOContext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class MarcacaoServicoAddDTO
    {
        public int ServicoId { get; set; }
        public int CategoriaId { get; set; }
        public int ProfissionalId { get; set; }
        
        public DateTime DataMarcacaoServico { get; set; }
        public DateTime Hora { get; set; }
    }
}
