
using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace AccesoADatos.Data
{
    public class DataCliente
    {
        
        public async Task<List<Cliente>> listarCliente()
        {
            using (var _context = new DBContext())
            {
                return await _context.cliente.ToListAsync();
            }
        }

        public async Task<List<Cliente>> GetAllUser()
        {
            //var db = dbConnection();

            using (var _context = new DBContext())
            {

                FormattableString sql = $"SELECT cliente.id_cliente, nombre, apellido, correo, tarjeta FROM hotel.cliente";
                
                return await _context.cliente.FromSqlRaw(@"SELECT id_cliente, nombre, apellido, correo, tarjeta FROM hotel.cliente").ToListAsync();
            }
        }


    }
}
