using Entidades.Entities;
using AccesoADatos.Data;
using Microsoft.AspNetCore.Mvc;

namespace Admin_HotelCocoMilk.Controllers
{
    public class ClienteController : Controller
    {
        private DataCliente dataCliente;

        
        public IConfiguration Configuration { get; }

        public ClienteController(IConfiguration configuration)
        {
            Configuration = configuration;
            dataCliente = new DataCliente();
        }

        [HttpGet]
        [Route("listarCliente")]
        public async Task<List<Cliente>> listarCliente()
        {
            return await dataCliente.listarCliente();
           
        }

        [HttpGet]
        [Route("GetAllUser")]
        public async Task<List<Cliente>> GetAllUser()
        {
            return await dataCliente.GetAllUser();
        }
    }
}
