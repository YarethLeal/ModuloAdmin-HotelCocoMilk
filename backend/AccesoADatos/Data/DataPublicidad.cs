using AccesoADatos.Context;
using Entidades.Entities;
using Microsoft.EntityFrameworkCore;

namespace AccesoADatos.Data
{
    public class DataPublicidad
    {

        public async Task<List<Publicidad>> listarPublicidad()
        {
            using (var _context = new DBContext())
            {
                return await _context.publicidad.Where(r => r.eliminado == false).OrderByDescending(r => r.id_publicidad).ToListAsync();
            }
        }

        public async Task<String> registarPublicidad(Publicidad publicidad)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    _context.publicidad.Add(publicidad);
                    await _context.SaveChangesAsync();

                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Publicidad Registrada";

        }

        public async Task<String> eliminarPublicidad(Publicidad publicidad)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    _context.publicidad.Remove(publicidad);
                    await _context.SaveChangesAsync();

                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Publicidad eliminada";
        }

        public async Task<String> modificarPublicidad(Publicidad publicidad)
        {
            try
            {
                using (var _context = new DBContext())
                {   
                    var publicidadModificado = new Publicidad();

                    publicidadModificado = _context.publicidad.Find(publicidad.id_publicidad);

                    if (publicidadModificado != null)
                    {
                        if (publicidadModificado.imagen != publicidad.imagen)
                        {
                            publicidadModificado.imagen = publicidad.imagen;
                        }

                        if (publicidadModificado.destino != publicidad.destino)
                        {
                            publicidadModificado.destino = publicidad.destino;
                        }

                        _context.Entry(publicidadModificado).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Publicidad actualizada";
        }
    }
}
