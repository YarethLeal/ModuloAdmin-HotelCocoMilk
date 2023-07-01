import { Component, Injectable, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/modelos/login.model';
import { HabitacionService } from 'src/app/core/servicios/habitacion.service';
import { LoginService } from 'src/app/core/servicios/login.service';

let dataLogin: Login;

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre: string;
  public contra: string;
  error: boolean = false;


  constructor(private loginService: LoginService, private habitacionService: HabitacionService, private router:Router ) {
    this.nombre = '';
    this.contra = '';
    dataLogin;
  }

  ngOnInit(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
  }

  actualizarEstados(){
      this.habitacionService.actualizarEstados().subscribe((respuesta: string) => {
        console.log(respuesta);
      });
  }

  buscarUsuario(nombre: string, contrasenna:string) {
    this.loginService.buscarUsuario({ nombre, contrasenna }).subscribe((data: any) => {
        dataLogin = new Login(data.nombre,data.contrasena,data.id_usuario)
      if(dataLogin.id_usuario!=null){
        localStorage.setItem('id',dataLogin.id_usuario.toString());
        localStorage.setItem('usuario', dataLogin.nombre);
        this.router.navigate(["home/bienvenida"]);
        this.actualizarEstados();
      }else{
        this.router.navigate(['']);
        this.error = true;
      }
      console.log(dataLogin);
    });
  }

  buttonInicioSesion(): void {
    //console.log("Nombre" + this.nombre.length);
    this.buscarUsuario(this.nombre, this.contra);
  }
}
