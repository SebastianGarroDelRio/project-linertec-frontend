
import { Estado } from "./estado.model";
import { TipoDocumento } from "./tipodocumento.model";

export class Proveedor {
    idProveedor?: number;
    nombreProveedor?:string;
    correo?:string;
    telefono?:string;
    direccion?:string;
    nombreContacto?:string;
    telefonoContacto?:string;
    fechaRegistro?:Date;
    tipoDocumento?:TipoDocumento
    estado?:Estado

}
