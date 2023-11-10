
import { Cliente } from "./cliente.model";
import { EstadoContrato } from "./estadocontrato.model";
import { Servicio } from "./servicio.model";

export class Contrato {
    idContrato?: number;
    descripcionServicio?: string;
	costoContrato?: Date;
	fechaInicio?: Date;
	fechaFin?: Date;
	servicio?: Servicio;
	estadoContrato?: EstadoContrato;
	cliente?: Cliente;
}
