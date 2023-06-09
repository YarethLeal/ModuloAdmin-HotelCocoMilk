using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class Pagina
    {
        [Key]
        public int id_pagina { get; set; }

        public int id_tipo_pagina { get; set; }

        public string descripcion { get; set; }

        public string? imagen { get; set; }

    }
}
