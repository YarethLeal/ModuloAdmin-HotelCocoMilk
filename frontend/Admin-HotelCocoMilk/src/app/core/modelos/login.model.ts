export interface Login {
  id_usuario: number;
  nombre: string;
  contrasenna: string;
}

export class Login implements Login {

  constructor(public nombre: string, public contrasenna: string, public id_usuario: number) {

  };


}