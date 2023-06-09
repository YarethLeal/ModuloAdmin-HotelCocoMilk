using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class PaginaController : Controller
    {
        [HttpPost]
        [Route("mostrarPagina")]
        public async Task<List<Pagina>> mostrarPagina(string tipoPagina)
        {
            return await (new DataPagina().mostrarPagina(tipoPagina));

        }

        [HttpPost]
        [Route("modificarPagina")]
        public async Task<String> modificarPagina(Pagina pagina)
        {
            return await (new DataPagina().modificarPagina(pagina));
        }
    }
}
