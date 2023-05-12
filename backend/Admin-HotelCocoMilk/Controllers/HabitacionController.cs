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

        [HttpGet]
        [Route("listarEstadoHabitaciones")]
        public async Task<List<HabitacionEstado>> listarEstadoHabitaciones()
        {
            return await (new DataHabitacion().listarEstadoHabitaciones());
        }

        [HttpGet]
        [Route("actualizarEstados")]
        public async Task<String> actualizarEstados()
        {
            return await (new DataHabitacion().actualizarEstados());
        }
    }
}
