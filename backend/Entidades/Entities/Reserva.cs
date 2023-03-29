using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    internal class Reserva
    {
        public int? id { get; set; }
        public string? idCliente { get; set; }
        public int? idHabitación { get; set; }
        public DateTime? fecha { get; set; }
        public DateTime? fechaEntrada { get; set; }
        public DateTime? fechaSalida { get; set; }
        public int? transacion { get; set; }
        public bool? eliminado { get; set; }

    }
}
