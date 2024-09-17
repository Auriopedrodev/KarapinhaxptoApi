using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class MarcacaoServico
    {
        [Key]
        public int Id { get; set; }
        public int ServicoId { get; set; }
        [ForeignKey(nameof(ServicoId))]
        public virtual Servico Servico { get; set; }
        public int CategoriaId { get; set; }
        [ForeignKey(nameof(CategoriaId))]
        public virtual Categoria Categoria { get; set; }
        public int ProfissionalId { get; set; }
        [ForeignKey(nameof(ProfissionalId))]
        public virtual Profissional Profissional { get; set; }
        public int MarcacaoId { get; set; }
        [ForeignKey(nameof(MarcacaoId))]
        public virtual Marcacao Marcacao { get; set; }
        public DateTime  DataMarcacaoServico { get; set; }
        public String Hora { get; set; }
    }
}
