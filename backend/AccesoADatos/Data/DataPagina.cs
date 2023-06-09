using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace AccesoADatos.Data
{
    public class DataPagina
    {
        public async Task<List<Pagina>> mostrarPagina(string tipoPagina)
        {
            using (var _context = new DBContext())
            {
                var listaPagina = (from p in _context.pagina
                                   join tp in _context.tipo_pagina on p.id_tipo_pagina equals tp.id_tipo_pagina
                                   where tp.tipo == tipoPagina
                                   select new Pagina
                                   {

                                       id_pagina = p.id_pagina,
                                       id_tipo_pagina = p.id_tipo_pagina,
                                       descripcion = p.descripcion,
                                       imagen = p.imagen
                                   });

                return await listaPagina.ToListAsync();
            }
        }

        public async Task<String> modificarPagina(Pagina pagina)
        {

            try
            {
                using (var _context = new DBContext())
                {
                    _context.Entry(pagina).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                    "Vuelve a intentarlo y, si el problema persiste, " +
                    "consulte con el administrador del sistema.";
            }
            return "Pagina Actualizada";

        }
    }
}
