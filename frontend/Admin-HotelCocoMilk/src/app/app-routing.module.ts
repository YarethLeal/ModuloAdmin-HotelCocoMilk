import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login/login.component';
import { HomeComponent } from './paginas/home/home/home.component';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { ReservacionComponent } from './paginas/reservacion/reservacion.component';
import { AdminHabitacionComponent } from './paginas/admin-habitacion/admin-habitacion.component';
import { EstadoHotelComponent } from './paginas/estado-hotel/estado-hotel.component';
import { DisponibilidadHabitacionComponent } from './paginas/disponibilidad-habitacion/disponibilidad-habitacion.component';
import { PublicidadComponent } from './paginas/publicidad/publicidad.component';
import { BienvenidaHomeComponent } from './paginas/bienvenida-home/bienvenida-home.component';
import { TemporadasComponent } from './paginas/temporadas/temporadas.component';
import { ModificarComoLlegarComponent } from './paginas/modificar-como-llegar/modificar-como-llegar.component';
import { ModificarFacilidadesComponent } from './paginas/modificar-facilidades/modificar-facilidades.component';
import { ModificarHomeComponent } from './paginas/modificar-home/modificar-home.component';
import { ModificarNosotrosComponent } from './paginas/modificar-nosotros/modificar-nosotros.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'home', component: HomeComponent, canActivate: [PermissionsGuard], children:[
    {path:'bienvenida', component: BienvenidaHomeComponent},
    {path:'modificar_home', component:ModificarHomeComponent },
    {path:'modificar_facilidades', component:ModificarFacilidadesComponent },
    {path:'modificar_nosotros', component:ModificarNosotrosComponent },
    {path:'modificar_como_llegar', component:ModificarComoLlegarComponent },
    {path:'reservacion', component: ReservacionComponent},
    {path:'admin_habitacion', component: AdminHabitacionComponent},
    {path:'estado_hotel', component: EstadoHotelComponent},
    {path:'disponibilidad_habitacion', component: DisponibilidadHabitacionComponent},
    {path:'temporadas', component: TemporadasComponent},
    {path:'publicidad', component: PublicidadComponent}
  ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
