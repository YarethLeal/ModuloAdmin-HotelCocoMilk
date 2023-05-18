using AccesoADatos.Context;
using Entidades.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccesoADatos.Data
{
    public class DataTemporadas
    {

        public async Task<List<TemporadasTipoHabitacion>> listarTemporadas()
        {
            using (var _context = new DBContext())
            {
                

                var listaTemporadas = (from t in _context.temporadas
                                   join th in _context.tipo_habitacion on t.id_tipo_habitacion equals th.id_tipo_habitacion
                                   orderby t.id_temporada
                                   select new TemporadasTipoHabitacion
                                   {

                                       id_temporada = t.id_temporada,
                                       tipo = th.tipo,
                                       fecha_inicio = t.fecha_inicio,
                                       fecha_final = t.fecha_final,
                                       oferta = t.oferta
                                   });

                return await listaTemporadas.ToListAsync();
            }
        }

        public async Task<String> registartemporadas(Temporadas temporadas)
        {
            var permitirRegistrar = true;
            try
            {
                using (var _context = new DBContext())
                {

                    List<Temporadas> listaTemporadas = await _context.temporadas.ToListAsync();

                    for (int i = 0; i < listaTemporadas.Count; i++)
                    {
                        if (listaTemporadas[i].id_tipo_habitacion == temporadas.id_tipo_habitacion) {
                            if ((listaTemporadas[i].fecha_inicio == temporadas.fecha_inicio && listaTemporadas[i].fecha_final == temporadas.fecha_final) ||
                                (listaTemporadas[i].fecha_inicio >= temporadas.fecha_inicio && listaTemporadas[i].fecha_inicio <= temporadas.fecha_final) ||
                                (listaTemporadas[i].fecha_final >= temporadas.fecha_inicio && listaTemporadas[i].fecha_final <= temporadas.fecha_final)
                                )
                            {
                                permitirRegistrar = false;
                            }
                        } 
                    }

                    if (permitirRegistrar == true)
                    {
                        temporadas.fecha_inicio = new DateTime(temporadas.fecha_inicio.Year,
                           temporadas.fecha_inicio.Month, temporadas.fecha_inicio.Day,
                           temporadas.fecha_inicio.Hour, temporadas.fecha_inicio.Minute,
                           temporadas.fecha_inicio.Second, DateTimeKind.Utc);
                        temporadas.fecha_final = new DateTime(temporadas.fecha_final.Year,
                           temporadas.fecha_final.Month, temporadas.fecha_final.Day,
                           temporadas.fecha_final.Hour, temporadas.fecha_final.Minute,
                           temporadas.fecha_final.Second, DateTimeKind.Utc);



                        _context.temporadas.Add(temporadas);
                        await _context.SaveChangesAsync();
                    }
                    else {
                        return "Esas fechas no estan disponibles";
                    }
                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Temporadas Registrada";

        }

        public async Task<String> modificarTemporadas(Temporadas temporadas)
        {
           /* try
            {*/
                using (var _context = new DBContext())
                {
                    var temporadasModificado = new Temporadas();

                    temporadasModificado = _context.temporadas.Find(temporadas.id_temporada);

                    temporadasModificado.fecha_inicio = new DateTime(temporadasModificado.fecha_inicio.Year,
                         temporadasModificado.fecha_inicio.Month, temporadasModificado.fecha_inicio.Day,
                         temporadasModificado.fecha_inicio.Hour, temporadasModificado.fecha_inicio.Minute,
                         temporadasModificado.fecha_inicio.Second, DateTimeKind.Utc);
                    temporadasModificado.fecha_final = new DateTime(temporadasModificado.fecha_final.Year,
                       temporadasModificado.fecha_final.Month, temporadasModificado.fecha_final.Day,
                       temporadasModificado.fecha_final.Hour, temporadasModificado.fecha_final.Minute,
                       temporadasModificado.fecha_final.Second, DateTimeKind.Utc);

                Console.Write("FI: " + temporadas.fecha_inicio + ", FF: " + temporadas.fecha_final);
                if (temporadasModificado != null)
                    {
                        var idTemporadas = temporadas.id_temporada;

                       /*if (temporadas.fecha_final != temporadasModificado.fecha_final)
                        {
                            temporadasModificado.fecha_final = temporadas.fecha_final;
                        }

                        if (temporadas.fecha_inicio != temporadasModificado.fecha_inicio)
                        {
                            temporadasModificado.fecha_inicio = temporadas.fecha_inicio;
                        }*/

                        if (temporadas.oferta != 0)
                        {
                            temporadasModificado.oferta = temporadas.oferta;
                        }

                        _context.Entry(temporadasModificado).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                }
            return "Oferta de temporada actualizado";
        }
        /*catch (DbUpdateException /* ex /)
        {

            return "No se pueden guardar los cambios. " +
                "Vuelve a intentarlo y, si el problema persiste, " +
                "consulte con el administrador del sistema.";
        }
        return "Oferta de temporada actualizado";
    }*/

        public async Task<String> eliminartemporadas(Temporadas temporadas)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    var temporadasEliminar = _context.temporadas.Find(temporadas.id_temporada); 

                    _context.temporadas.Remove(temporadasEliminar);
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Oferta de temporadas eliminada";
        }
    }
}
