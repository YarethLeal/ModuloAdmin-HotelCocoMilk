using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace AccesoADatos.Data
{
    public class DataTipoHabitacion
    {
        public async Task<List<TipoHabitacion>> listarTipoHabitacion()
        {
            using (var _context = new DBContext())
            {
                return await _context.tipo_habitacion.ToListAsync();
            }
        }
    }
}
