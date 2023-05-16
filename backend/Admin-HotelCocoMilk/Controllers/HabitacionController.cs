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

        [HttpGet]
        [Route("listarHabitaciones")]
        public async Task<List<Habitacion>> listarHabitaciones()
        {
            return await (new DataHabitacion().listarHabitaciones());
        }

        [HttpPost]
        [Route("registrarHabitacion")]
        public async Task<String> registarHabitacion(Habitacion habitacion) 
        {
            return await (new DataHabitacion().registarHabitacion(habitacion));
        }

        [HttpPost]
        [Route("modificarHabitacion")]
        public async Task<String> modificarHabitación(Habitacion habitacion)
        { 
            return await( new DataHabitacion().modificarHabitación(habitacion) );
        }

        [HttpPost]
        [Route("eliminarHabitacion")]
        public async Task<String> eliminarHabitacion(Habitacion habitacion) 
        {
            return await (new DataHabitacion().eliminarHabitacion(habitacion));
        }

    }
}
