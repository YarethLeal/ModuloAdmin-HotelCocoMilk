using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class Galeria
    {
        [Key]
        public int? id { get; set; }
        public string? nombre { get; set; }
        public string? imagen { get; set; }
    }
}
