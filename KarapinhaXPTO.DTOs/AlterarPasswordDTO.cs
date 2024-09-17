using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.DTOs
{
    public class AlterarPasswordDTO
    {

        public int Id { get; set; }
        public string Password { get; set; }

        public string PasswordAntiga {  get; set; }
    }
}
