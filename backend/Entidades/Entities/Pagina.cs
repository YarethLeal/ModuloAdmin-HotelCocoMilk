using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    internal class Pagina
    {
       public int? id { get; set; }
       public int? idTipoPagina { get; set; }
       public string? descripcion { get; set; }
       public byte[]? imagen { get; set; }

    }
}
