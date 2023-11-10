import { Producto } from "./producto.model";
import { Servicio } from "./servicio.model";

export class DetalleServicio {
    idDetalleServicio?: number;
    idServicio?: Servicio;
    idProducto?: Producto;
    cantidad?: number;
    precioUnitario?: number;
    total?: number;
}
