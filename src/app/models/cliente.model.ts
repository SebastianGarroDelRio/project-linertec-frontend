//si en caso estuviera enlazada a una tabla, se realiza el import
//ejemplo
//Tabla: tipoDocumento
//1.RUC
//2.DNI
// import { tipoDocumento } from "./tipoDocumento.model";

export class Cliente {
    idCliente?: number;
    nombre?:string;
    apellidoPaterno?:string;
    apellidoMaterno?:string;
    dni?:string;
    correo?:string;
    telefono?:string;
    fechaNacimiento?:Date; 
}
