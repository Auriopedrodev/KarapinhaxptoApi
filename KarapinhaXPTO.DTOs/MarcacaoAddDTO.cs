using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class MarcacaoAddDTO
    {
        public DateTime DataRegistoMarcacao { get; set; }
        public double Pagamento { get; set; }
        public bool EstadoMarcacao { get; set; }
        public int? UtilizadorId { get; set; }
        public List<MarcacaoServicoAddDTO> ListaMarcacaoServico { get; set; }
      
    }
}
