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
import { PaginaComponent } from './paginas/pagina/pagina.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    PaginaComponent,
    ReservacionComponent,
    AdminHabitacionComponent,
    PublicidadComponent,
    EstadoHotelComponent,
    DisponibilidadHabitacionComponent,
    BienvenidaHomeComponent,
    TemporadasComponent,
    ModificarHabitacionComponent,
    ModificarTemporadasComponent,
    NotificacionDialogComponent
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
