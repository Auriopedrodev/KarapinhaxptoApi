 using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class Servico
    {
        [Key]
        public int Id { get; set; }
        public String? TipoServico { get; set; }
        public double PrecoServico { get; set; }
        public int CategoriaId { get; set; }
        [ForeignKey(nameof(CategoriaId))]
        public Categoria Categoria { get; set; }
        public bool Validade { get; set; }
        public virtual ICollection<MarcacaoServico> ListaMarcacaos { get; set; }

        public Servico()
        {
            ListaMarcacaos = new Collection<MarcacaoServico>();
        }
    }
}
