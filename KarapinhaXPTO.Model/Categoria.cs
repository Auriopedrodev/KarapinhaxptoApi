using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTOContext.Model
{
    public class Categoria
    {
        [Key]
        public int Id { get; set; }
        public string? Tipo { get; set; }

    }
}
