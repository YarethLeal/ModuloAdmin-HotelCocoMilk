using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class TemporadasController : Controller
    {
        [HttpGet]
        [Route("listarTemporadas")]
        public async Task<List<TemporadasTipoHabitacion>> listarTemporadas()
        {
            return await (new DataTemporadas().listarTemporadas());
        }

        [HttpPost]
        [Route("registartemporadas")]
        public async Task<String> registartemporadas(Temporadas temporadas) 
        {
            return await (new DataTemporadas().registartemporadas(temporadas));
        }

        [HttpPost]
        [Route("modificarTemporadas")]
        public async Task<String> modificarTemporadas(Temporadas temporadas)
        {
            return await (new DataTemporadas().modificarTemporadas(temporadas));
        }

        [HttpPost]
        [Route("eliminarTemporadas")]
        public async Task<String> eliminarTemporadas(Temporadas temporadas)
        {
            return await (new DataTemporadas().eliminartemporadas(temporadas));
        }
    }
}
