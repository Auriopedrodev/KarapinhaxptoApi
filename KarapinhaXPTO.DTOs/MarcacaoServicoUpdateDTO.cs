using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class MarcacaoServicoUpdateDTO
    {
        public int Id { get; set; }
        public int ServicoId { get; set; }
        public int CategoriaId { get; set; }
        public int ProfissionalId { get; set; }
        public int MarcacaoId { get; set; }
        public DateTime DataMarcacaoServico { get; set; }
        public String Hora { get; set; }
    }
}
