using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using AccesoADatos.Data;
using Microsoft.OpenApi.Any;

namespace Admin_HotelCocoMilk.Controllers
{
    public class PublicidadController : Controller
    {
        [HttpGet]
        [Route("listarPublicidad")]
        public async Task<List<Publicidad>> listarPublicidad()
        {
            return await (new DataPublicidad().listarPublicidad());
        }

        [HttpPost]
        [Route("registarPublicidad")]
        public async Task<String> registarPublicidad(Publicidad publicidad)
        {
            return await (new DataPublicidad().registarPublicidad(publicidad));
        }

        [HttpPost]
        [Route("UploadFile")]
        public async Task<IActionResult> UploadFile()
        {
            var file = Request.Form.Files[0];

            if (file.Length > 0)
            {
                var filePath = Path.Combine("C:/Users/Usuario/Desktop/REPOSITORIOS/ModuloAdmin-HotelCocoMilk/frontend/Admin-HotelCocoMilk/src/assets/images/", file.FileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return Ok();
            }

            return BadRequest("No se ha proporcionado ningún archivo.");
        }

        [HttpPost]
        [Route("eliminarPublicidad")]
        public async Task<String> eliminarPublicidad(Publicidad publicidad) 
        {
            return await (new DataPublicidad().eliminarPublicidad(publicidad));
        }


        [HttpPost]
        [Route("modificarPublicidad")]
        public async Task<String> modificarPublicidad(Publicidad publicidad)
        {
            return await (new DataPublicidad().modificarPublicidad(publicidad));
        }
    }
}
