using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class ProfissionalHorario
    {
        [Key]
        public int Id { get; set; }
        public int ProfissionalId { get; set; }
        [ForeignKey(nameof(ProfissionalId))]
        public Profissional Profissional { get; set; }
        public int HorarioId { get; set; }
        [ForeignKey(nameof(HorarioId))]
        public Horario? Horario { get; set; }
    }
}
