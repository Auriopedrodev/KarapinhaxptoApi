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
    public class Profissional
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public string BI { get; set; }
        public string Foto { get; set; }
        public String Telefone { get; set; }
        public int CategoriaId { get; set; }
        [ForeignKey(nameof(CategoriaId))]
        public Categoria? Categoria { get; set; }
        public virtual ICollection<ProfissionalHorario> HorariosProfissional { get; set; }
        public virtual ICollection<MarcacaoServico> ListaMarcacaos { get; set; }
        public bool Validade { get; set; }
        public int? PerfilId { get; set; }
        [ForeignKey(nameof(PerfilId))]
        public Perfil? Perfil { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }

        public Profissional()
        {
            HorariosProfissional=new Collection<ProfissionalHorario>();
            ListaMarcacaos = new Collection<MarcacaoServico>();
        }
    }
}
