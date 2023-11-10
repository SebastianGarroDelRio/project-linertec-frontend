import { Categoria } from "./categoria.model";
import { Estado } from "./estado.model";
import { Proveedor } from "./proveedor.model";


export class Producto {
    idProducto?:number;
	descripcionProducto?:string;
	fechaRegistro?:Date;
	estado?:Estado;
	proveedor?:Proveedor;
	categoria?:Categoria;
}
