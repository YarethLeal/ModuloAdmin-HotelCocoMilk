using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;


namespace AccesoADatos.Data
{
    public class DataUsuario
    {

        public async Task<Usuario> buscarUsuario(string nombre, string contrasenna)
        {
            using (var _context = new DBContext())
             {
              var usuario = new Usuario();
              var  usuarioTemp = await _context.usuario.Where(x => x.nombre.Contains(nombre) && x.contrasena.Contains(contrasenna)).FirstOrDefaultAsync();
                if (usuarioTemp == null)
                {
                    usuario.id_usuario = null;
                    usuario.nombre = null;
                    usuario.contrasena = null;
                }
                else 
                {
                    usuario = usuarioTemp;
                }

                return usuario;
            }

        }

    }
}
