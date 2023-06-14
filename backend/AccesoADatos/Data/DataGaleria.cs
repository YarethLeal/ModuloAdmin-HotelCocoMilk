using AccesoADatos.Context;
using Entidades.Entities;
using Microsoft.EntityFrameworkCore;

namespace AccesoADatos.Data
{
    public class DataGaleria
    {
        public async Task<List<Galeria>> listarGaleria()
        {
            using (var _context = new DBContext())
            {

                return await _context.galeria.ToListAsync();
            }
        }
        public async Task<String> registarImagenGaleria(Galeria galeria)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    _context.galeria.Add(galeria);
                    await _context.SaveChangesAsync();

                }
            }
            catch (DbUpdateException ex)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Imagen Registrada";

        }
        public async Task<String> eliminarImagenGaleria(Galeria galeria)
        {
            using (var _context = new DBContext())
            {

                try
                {
                    _context.galeria.Remove(galeria);
                    await _context.SaveChangesAsync();

                }
                catch (DbUpdateException /* ex */)
                {
                    return "No se puede eliminar. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
                }
                return "Imagen Eliminada";
            }
        }
    }
}
