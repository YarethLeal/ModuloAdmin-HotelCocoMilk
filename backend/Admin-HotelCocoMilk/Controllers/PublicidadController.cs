using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class PublicidadController : Controller
    {
        [HttpGet]
        [Route("listarPublicidad")]
        public async Task<List<Publicidad>> listarPublicidad()
        {
            return await (new DataPublicidad().listarPublicidad());
        }

        [HttpPost]
        [Route("registarPublicidad")]
        public async Task<String> registarPublicidad(Publicidad publicidad)
        {
            return await (new DataPublicidad().registarPublicidad(publicidad));
        }

        [HttpPost]
        [Route("eliminarPublicidad")]
        public async Task<String> eliminarPublicidad(Publicidad publicidad) 
        {
            return await (new DataPublicidad().eliminarPublicidad(publicidad));
        }


        [HttpPost]
        [Route("modificarPublicidad")]
        public async Task<String> modificarPublicidad(Publicidad publicidad)
        {
            return await (new DataPublicidad().modificarPublicidad(publicidad));
        }
    }
}
