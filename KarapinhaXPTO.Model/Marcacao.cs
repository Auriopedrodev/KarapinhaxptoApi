using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class Marcacao
    {
        [Key]
        public int Id { get; set; }
        public DateTime DataRegistoMarcacao { get; set; }
        public double Pagamento { get; set; }
        public bool EstadoMarcacao { get; set; }
        public int? UtilizadorId { get; set; }
        [ForeignKey(nameof(UtilizadorId))]
        public Utilizador? Utilizador { set; get; }
        
    }
}
