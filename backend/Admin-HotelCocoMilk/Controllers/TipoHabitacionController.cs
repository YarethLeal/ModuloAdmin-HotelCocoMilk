using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class TipoHabitacionController : Controller
    {
        [HttpPost]
        [Route("listarTipoHabitacion")]
        public async Task<List<TipoHabitacion>> listarTipoHabitacion()
        {
            return await (new DataTipoHabitacion().listarTipoHabitacion());
        }

        [HttpPost]
        [Route("modificarTipoHabitacion")]
        public async Task<String> modificarTipoHabitacion(TipoHabitacion tipoHabitacion)
        {
            return await (new DataTipoHabitacion().modificarTipoHabitacion(tipoHabitacion));
        }
    }
}
