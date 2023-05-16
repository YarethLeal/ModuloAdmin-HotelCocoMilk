using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class TemporadasController : Controller
    {
        [HttpGet]
        [Route("listarTemporadas")]
        public async Task<List<Temporadas>> listarTemporadas()
        {
            return await (new DataTemporadas().listarTemporadas());
        }

        [HttpPost]
        [Route("registartemporadas")]
        public async Task<String> registartemporadas(Temporadas temporadas) 
        {
            return await (new DataTemporadas().registartemporadas(temporadas));
        }


    }
}
