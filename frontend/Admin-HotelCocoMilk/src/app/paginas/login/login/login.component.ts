import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/modelos/login.model';
import { LoginService } from 'src/app/core/servicios/login.service';

let dataLogin: Login;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre: string;
  public contra: string;


  constructor(private loginService: LoginService, private router:Router ) {
    this.nombre = '';
    this.contra = '';
    dataLogin;
  }

  ngOnInit(): void {
  }

  buscarUsuario(nombre: string, contrasenna:string) {

    if (nombre.trim().length != 0 && contrasenna.trim().length !=0) {
      this.loginService.buscarUsuario({ nombre, contrasenna }).subscribe((data: any) => {
         dataLogin = new Login(data.nombre,data.contrasena,data.id_usuario)
        if(dataLogin.id_usuario!=null){
          localStorage.setItem('id',dataLogin.id_usuario.toString());
          localStorage.setItem('usuario', dataLogin.nombre);
          this.router.navigate(["home"]);
        }
        console.log(dataLogin);
        
      });
      
    }
    else {
      console.log("Buscar" + nombre.length);
      
    }
  }

  buttonInicioSesion(): void {
    console.log("Nombre" + this.nombre.length);
    this.buscarUsuario(this.nombre, this.contra);
  }


}
