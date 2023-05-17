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


        public async Task<String> modificarTipoHabitacion(TipoHabitacion tipoHabitacion)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    _context.Entry(tipoHabitacion).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                    "Vuelve a intentarlo y, si el problema persiste, " +
                    "consulte con el administrador del sistema.";
            }
            return "Tipo habitación Actualizada";

        }
    }
}
