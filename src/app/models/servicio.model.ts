import { Cliente } from "./cliente.model";
import { EstadoServicio } from "./estadoservicio";
import { TipoServicio } from "./tiposervicio.model";

export class Servicio {

    idServicio?: number;
    descripcionServicio?:string;
    costoServicio?:number;
    fechaRegistro?:Date;
    tiposervicio?:TipoServicio;
    estadoservicio?:EstadoServicio;
    cliente?:Cliente;
}
