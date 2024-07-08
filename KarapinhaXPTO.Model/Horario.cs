using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class Horario
    {
        [Key]
        public int Id { get; set; }
        public string? Hora { get; set; }
    }
}
