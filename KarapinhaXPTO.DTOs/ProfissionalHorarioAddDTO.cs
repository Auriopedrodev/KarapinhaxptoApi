using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class ProfissionalHorarioAddDTO
    {
        public int ProfissionalId { get; set; }
        public int HorarioId { get; set; }

        /*public List<int> HorarioId { get; set; }*/


    }
}
