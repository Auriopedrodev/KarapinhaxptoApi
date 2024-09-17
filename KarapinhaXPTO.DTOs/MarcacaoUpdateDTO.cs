using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class MarcacaoUpdateDTO
    {
        public int Id { get; set; }
        public DateTime DataRegistoMarcacao { get; set; }
        public double Pagamento { get; set; }
        public bool EstadoMarcacao { get; set; }
        public int? UtilizadorId { get; set; }
        public List<MarcacaoServicoUpdateDTO> ListaMarcacaoServico { get; set; }
       
    }
}
