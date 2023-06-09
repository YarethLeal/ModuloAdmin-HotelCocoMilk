using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class TipoPagina
    {
        [Key]
        public int id_tipo_pagina { get; set; }
        public string tipo { get; set; }
    }
}
