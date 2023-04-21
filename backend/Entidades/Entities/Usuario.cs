using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class Usuario
    {
        [Key]
        public int? id_usuario { get; set; }
        public string? nombre { get; set; }
        public string? contrasena { get; set; }

    }
}
