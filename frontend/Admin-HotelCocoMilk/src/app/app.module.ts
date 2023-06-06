import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login/login.component';
import { HeaderComponent } from './core/componentes/header/header.component';
import { FooterComponent } from './core/componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './paginas/home/home/home.component';
import { MenuComponent } from './core/componentes/menu/menu.component';
import { ReservacionComponent } from './paginas/reservacion/reservacion.component';
import { AdminHabitacionComponent } from './paginas/admin-habitacion/admin-habitacion.component';
import { PublicidadComponent } from './paginas/publicidad/publicidad.component';
import { EstadoHotelComponent } from './paginas/estado-hotel/estado-hotel.component';
import { DisponibilidadHabitacionComponent } from './paginas/disponibilidad-habitacion/disponibilidad-habitacion.component';
import { BienvenidaHomeComponent } from './paginas/bienvenida-home/bienvenida-home.component';
import { TemporadasComponent } from './paginas/temporadas/temporadas.component';
import { DatePipe } from '@angular/common';
import { ModificarHabitacionComponent } from './core/componentes/modificar-habitacion/modificar-habitacion.component';
import { ModificarTemporadasComponent } from './core/componentes/modificar-temporadas/modificar-temporadas.component';
import { NotificacionDialogComponent } from './core/componentes/notificacion-dialog/notificacion-dialog.component';
import { ReservaInformacionComponent } from './core/componentes/reserva-informacion/reserva-informacion.component';
import { VerHabitacionComponent } from './core/componentes/ver-habitacion/ver-habitacion.component';
import { ModificarPublicidadComponent } from './core/componentes/modificar-publicidad/modificar-publicidad.component';
import { ModificarHomeComponent } from './paginas/modificar-home/modificar-home.component';
import { ModificarFacilidadesComponent } from './paginas/modificar-facilidades/modificar-facilidades.component';
import { ModificarNosotrosComponent } from './paginas/modificar-nosotros/modificar-nosotros.component';
import { ModificarComoLlegarComponent } from './paginas/modificar-como-llegar/modificar-como-llegar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ReservacionComponent,
    AdminHabitacionComponent,
    PublicidadComponent,
    EstadoHotelComponent,
    DisponibilidadHabitacionComponent,
    BienvenidaHomeComponent,
    TemporadasComponent,
    ModificarHabitacionComponent,
    ModificarTemporadasComponent,
    NotificacionDialogComponent,
    ReservaInformacionComponent,
    VerHabitacionComponent,
    ModificarPublicidadComponent,
    ModificarHomeComponent,
    ModificarFacilidadesComponent,
    ModificarNosotrosComponent,
    ModificarComoLlegarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
