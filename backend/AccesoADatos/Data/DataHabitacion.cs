﻿using AccesoADatos.Context;
using Entidades.Entities;
using Microsoft.EntityFrameworkCore;

namespace AccesoADatos.Data
{
    public class DataHabitacion
    {
        public async Task<List<ReservacionDisponible>> disponibilidadHabitaciones(HabitacionDisponible habitacionDisponible)
        {
            using (var _context = new DBContext())
            {
                
                //Se obtiene el id del tipo de habitación.
                TipoHabitacion tipo_habitacion = _context.tipo_habitacion.Where(tp => tp.tipo == habitacionDisponible.tipoHabitacion).First();

                //Se obtiene una lista con las habitaciones que son del tipo especificado.
                List<Habitacion> listaHabitaciones = _context.habitacion.Where(h => h.id_tipo_habitacion == tipo_habitacion.id_tipo_habitacion).OrderBy(x => x.numero_id).ToList();

                //Se obtiene una lista de todas las reservas actuales.
                List<Reserva> listaReservas = _context.reserva.Where(r => r.eliminado == false).OrderBy(x => x.fecha_entrada).ToList();

                //Se recorre la lista de Reservas y se obtienen las únicas con las habitaciones deseadas.
                ReservacionDisponible reservaDisponible = new ReservacionDisponible();

                // Lista con las habitaciones disponibles.
                List<ReservacionDisponible> listaHabitacionDisponible = new List<ReservacionDisponible>();
                
                for (int x = 0; x < listaHabitaciones.Count(); x++)
                {
                    listaReservas = _context.reserva.Where(r => r.eliminado == false && r.id_habitacion == listaHabitaciones[x].numero_id).OrderBy(x => x.fecha_entrada).ToList();

                    if (listaReservas.Count() > 0)
                    {
                        for (int i = 0; i < listaReservas.Count(); i++)
                        {
                            if ((habitacionDisponible.fechaLlegada >= listaReservas[i].fecha_entrada && habitacionDisponible.fechaLlegada <= listaReservas[i].fecha_salida)
                                || (habitacionDisponible.fechaSalida >= listaReservas[i].fecha_entrada && habitacionDisponible.fechaSalida <= listaReservas[i].fecha_salida))   // Habitacion ocupada
                            {
                                reservaDisponible.numero_habitacion = null;
                                reservaDisponible.id_tipo_habitacion = null;
                                reservaDisponible.tipo = null;
                                reservaDisponible.informacion = null;
                                reservaDisponible.imagen = null;
                                reservaDisponible.tarifa = null;

                            }
                            else if (((listaReservas[i].fecha_entrada < habitacionDisponible.fechaLlegada && listaReservas[i].fecha_entrada < habitacionDisponible.fechaSalida)  // La fecha de llegada es antes de la fecha de llegada y salida de dicha habitación reservada y
                                && (listaReservas[i].fecha_salida < habitacionDisponible.fechaLlegada && listaReservas[i].fecha_salida < habitacionDisponible.fechaSalida)) // la fecha de salida es antes de la fecha de llegada y salida de dicha habitación reservada, por lo tanto, está disponible.
                                || ((listaReservas[i].fecha_entrada > habitacionDisponible.fechaLlegada && listaReservas[i].fecha_entrada > habitacionDisponible.fechaSalida) // La fecha de llegada es después de la fecha de llegada y salida de dicha habitación reservada y
                                && (listaReservas[i].fecha_salida > habitacionDisponible.fechaLlegada && listaReservas[i].fecha_salida > habitacionDisponible.fechaSalida)))  // la fecha de salida es antes de la fecha de llegada y salida de dicha habitación reservada, por lo tanto, está disponible.
                            {
                                reservaDisponible.numero_habitacion = listaHabitaciones[x].numero_id;
                                reservaDisponible.id_tipo_habitacion = tipo_habitacion.id_tipo_habitacion;
                                reservaDisponible.tipo = tipo_habitacion.tipo;
                                reservaDisponible.informacion = tipo_habitacion.informacion;
                                reservaDisponible.imagen = tipo_habitacion.imagen;
                                reservaDisponible.tarifa = tipo_habitacion.tarifa;

                            }
                        } // Fin for
                    
                    } else   // La habitación no se ha reservado nunca
                    {
                        if (listaReservas.Count() == 0)
                        {
                            reservaDisponible.numero_habitacion = listaHabitaciones[x].numero_id;
                            reservaDisponible.id_tipo_habitacion = tipo_habitacion.id_tipo_habitacion;
                            reservaDisponible.tipo = tipo_habitacion.tipo;
                            reservaDisponible.informacion = tipo_habitacion.informacion;
                            reservaDisponible.imagen = tipo_habitacion.imagen;
                            reservaDisponible.tarifa = tipo_habitacion.tarifa;

                        }
                    } 

                    // Aplicar descuento de temporadas si en necesario
                    if (reservaDisponible.numero_habitacion != null)
                    {
                        ReservacionDisponible reservaDisponible2 = new ReservacionDisponible();

                        int? numero_h = reservaDisponible.numero_habitacion;
                        int? tarifa_h = reservaDisponible.tarifa;
                        string? tipo_h = reservaDisponible.tipo;

                        reservaDisponible2.numero_habitacion = numero_h;
                        reservaDisponible2.id_tipo_habitacion = tipo_habitacion.id_tipo_habitacion;
                        reservaDisponible2.tipo = habitacionDisponible.tipoHabitacion;
                        reservaDisponible2.tarifa = tarifa_h;

                        List<Temporadas> listaTemporadas = _context.temporadas.Where(h => h.id_tipo_habitacion == tipo_habitacion.id_tipo_habitacion).OrderBy(x => x.id_temporada).ToList();

                         for (int k = 0; k < listaTemporadas.Count(); k++)
                         {
                             if (habitacionDisponible.fechaLlegada >= listaTemporadas[k].fecha_inicio && habitacionDisponible.fechaSalida <= listaTemporadas[k].fecha_final)
                             {
                                 double descuentoPorcentaje = listaTemporadas[k].oferta / 100.00;
                                 int descuento = (int)(descuentoPorcentaje * reservaDisponible2.tarifa);

                                reservaDisponible2.tarifa = reservaDisponible2.tarifa - descuento;  // Aplicar descuento
                                 k = listaTemporadas.Count() - 1;
                                 break;
                             }
                         }

                        listaHabitacionDisponible = listaHabitacionDisponible.Prepend(reservaDisponible2).ToList();
                        reservaDisponible.numero_habitacion = null;
                    }

                } 

                return await Task.FromResult(listaHabitacionDisponible);
            
            }
        }


        public async Task<List<HabitacionEstado>> listarEstadoHabitaciones()
        {
            using (var _context = new DBContext())
            {

                var listahabitaciones = (from h in _context.habitacion
                                         join th in _context.tipo_habitacion on h.id_tipo_habitacion equals th.id_tipo_habitacion
                                         orderby h.numero_id
                                         select new HabitacionEstado
                                         {
                                             numero_habitacion = h.numero_id,
                                             tipo = th.tipo,
                                             estado = h.estado,

                                         });

                return await listahabitaciones.ToListAsync();
            }
        }


        public async Task<String> actualizarEstados()
        {
            using (var _context = new DBContext())
            {

                DateTime fechaActual = DateTime.Today;
                List<Habitacion> listaHabitaciones = _context.habitacion.ToList();

                //Se obtiene una lista de todas las reservas actuales.
                List<Reserva> listaReservas = _context.reserva.Where(r => r.eliminado == false).OrderBy(x => x.fecha_entrada).ToList();

                for (int i = 0; i < listaReservas.Count(); i++)
                {
                    for (int x = 0; x < listaHabitaciones.Count(); x++)
                    {
                        // Si el número de habitación se encuentra en la lista de reservas entonces se debe validar la disponibilidad
                        if (listaHabitaciones[x].numero_id == listaReservas[i].id_habitacion)
                        {
                            if (listaReservas[i].fecha_entrada == fechaActual)
                            {
                                
                                listaHabitaciones[x].estado = "OCUPADA";
                                
                            }
                            
                            if (listaReservas[i].fecha_entrada < fechaActual && listaReservas[i].fecha_salida > fechaActual)
                            {
                                listaHabitaciones[x].estado = "RESERVADA";
                               
                            }

                            if (listaReservas[i].fecha_salida == fechaActual)
                            {
                                listaHabitaciones[x].estado = "DISPONIBLE";
                            }

                            break;
                        }
                        else {
                            listaHabitaciones[x].estado = "DISPONIBLE";
                        }

                    } // Fin for
                } // Fin for

                for (int x = 0; x < listaHabitaciones.Count(); x++)
                {
                    _context.Entry(listaHabitaciones[x]).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }

                return "Estados actualizados";
            }
        }

        public async Task<List<Habitacion>> listarHabitaciones()
        {
            using (var _context = new DBContext())
            {
                return await _context.habitacion.ToListAsync();
            }
        }

        public async Task<String> registarHabitacion(Habitacion habitacion)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    _context.habitacion.Add(habitacion);
                    await _context.SaveChangesAsync();

                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Habitación Registrada";

        }

        public async Task<String> modificarHabitacion(Habitacion habitacion)
        {

            try
            {
                using (var _context = new DBContext())
                {
                    _context.Entry(habitacion).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                    "Vuelve a intentarlo y, si el problema persiste, " +
                    "consulte con el administrador del sistema.";
            }
            return "Habitación Actualizada";

        }

        public async Task<String> eliminarHabitacion(Habitacion habitacion)
        {
            using (var _context = new DBContext())
            {

                try
                {
                    _context.habitacion.Remove(habitacion);
                    await _context.SaveChangesAsync();

                }
                catch (DbUpdateException /* ex */)
                {
                    return "No se puede eliminar. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
                }
                return "Habitación Eliminada";
            }
        }
    }
}

