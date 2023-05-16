﻿using AccesoADatos.Context;
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

        public async Task<List<Temporadas>> listarTemporadas()
        {
            using (var _context = new DBContext())
            {
                return await _context.temporadas.ToListAsync();
            }
        }

        public async Task<String> registartemporadas(Temporadas temporadas)
        {
            try
            {
                using (var _context = new DBContext())
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
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Temporadas Registrada";

        }

    }
}
