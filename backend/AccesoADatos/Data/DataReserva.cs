﻿using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace AccesoADatos.Data
{
    public class DataReserva
    {
        public async Task<List<Reserva>> listarReserva()
        {
            using(var _context = new DBContext())
            {
                return await _context.reserva.ToListAsync();
            }    
        }
        public async Task<String> eliminarReserva(int id)
        {

            try
            {
                using (var _context = new DBContext())
                {
                    var reserva = new Reserva();
                    reserva = _context.reserva
                                .Where(b => b.id_reserva == id)
                                .FirstOrDefault();
                    reserva.eliminado = true;
                    reserva.fecha_salida = new DateTime(reserva.fecha_salida.Year,
                    reserva.fecha_salida.Month, reserva.fecha_salida.Day,
                    reserva.fecha_salida.Hour, reserva.fecha_salida.Minute,
                    reserva.fecha_salida.Second, DateTimeKind.Utc);
                    reserva.fecha = new DateTime(reserva.fecha.Year,
                        reserva.fecha.Month, reserva.fecha.Day,
                        reserva.fecha.Hour, reserva.fecha.Minute,
                        reserva.fecha.Second, DateTimeKind.Utc);
                    reserva.fecha_entrada = new DateTime(reserva.fecha_entrada.Year,
                        reserva.fecha_entrada.Month, reserva.fecha_entrada.Day,
                        reserva.fecha_entrada.Hour, reserva.fecha_entrada.Minute,
                        reserva.fecha_entrada.Second, DateTimeKind.Utc);
                    _context.Entry(reserva).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateException /* ex*/)
            {

                return "No se pueden guardar los cambios. " +
                    "Vuelve a intentarlo y, si el problema persiste, " +
                    "consulte con el administrador del sistema.";
            }
            return "Reserva Eliminada";

        }

    }
}
