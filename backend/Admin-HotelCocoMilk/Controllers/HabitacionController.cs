using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class HabitacionController : Controller
    {
        [HttpPost]
        [Route("disponibilidadHabitaciones")]
        public async Task<List<ReservacionDisponible>> disponibilidadHabitaciones(DateTime fechaLlegada, DateTime fechaSalida, string tipoHabitacion)
        {
            return await (new DataHabitacion().disponibilidadHabitaciones(fechaLlegada, fechaSalida, tipoHabitacion));
        }
    }
}
