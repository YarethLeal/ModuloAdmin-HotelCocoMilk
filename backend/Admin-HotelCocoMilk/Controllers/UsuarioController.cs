using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class UsuarioController : Controller
    {

        [HttpPost]
        [Route("buscarUsuario")]
        public async Task<Usuario> buscarUsuario(string nombre, string contrasenna)
        {
            return await (new DataUsuario().buscarUsuario(nombre, contrasenna));
        }

    }
}
