
import { Estado } from "./estado.model";
import { TipoDocumento } from "./tipodocumento.model";


export class Cliente {
    idCliente?: number;
    nombreCliente?:string;
    correo?:string;
    telefono?:string;
    direccion?:string;
    nombreContacto?:string;
    telefonoContacto?:string;
    fechaNacimiento?:Date;
    fechaRegistro?:Date;
    tipodocumento?:TipoDocumento;
    estado?:Estado;
}
