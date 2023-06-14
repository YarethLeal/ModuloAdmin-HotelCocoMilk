using AccesoADatos.Data;
using Entidades.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Admin_HotelCocoMilk.Controllers
{
    public class GaleriaController : Controller
    {
        [HttpGet]
        [Route("listarGaleria")]
        public async Task<List<Galeria>> listarGaleria()
        {
            return await (new DataGaleria().listarGaleria());
        }
        [HttpPost]
        [Route("registrarImagenGaleria")]
        public async Task<String> registarImagenGaleria(Galeria galeria)
        {
            return await (new DataGaleria().registarImagenGaleria(galeria));
        }
        [HttpPost]
        [Route("eliminarImagenGaleria")]
        public async Task<String> eliminarImagenGaleria(Galeria galeria)
        {
            return await (new DataGaleria().eliminarImagenGaleria(galeria));
        }
    }
}
