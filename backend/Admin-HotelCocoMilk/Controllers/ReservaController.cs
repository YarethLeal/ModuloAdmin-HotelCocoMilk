using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;

namespace Admin_HotelCocoMilk.Controllers
{
    public class ReservaController : Controller
    {

        [HttpGet]
        [Route("listarReservas")]
        public async Task<List<Reserva>> listarReserva()
        {
            return await (new DataReserva().listarReserva());
        }

        [HttpPost]
        [Route("eliminarReserva")]
        public async Task<String> eliminarReserva(int id)
        {
            return await (new DataReserva().eliminarReserva(id));
        }
    }
}
