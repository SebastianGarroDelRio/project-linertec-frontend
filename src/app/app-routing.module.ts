import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';


import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { CrudServicioComponent } from './components/crud-servicio/crud-servicio.component';

import { WebInicioComponent } from './public/components/inicio/inicio.component';
import { WebContactoComponent } from './public/components/contacto/contacto.component';
import { WebProyectoComponent } from './public/components/proyecto/proyecto.component';
import { WebNosotrosComponent } from './public/components/nosotros/nosotros.component';


import { WebServicioComponent } from './public/components/servicio/servicio.component';
import { LayoutWeb } from './layouts/web/layoutweb.component';
import { LayoutIntranet } from './layouts/intranet/layoutintranet.component';
import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { CrudContratoComponent } from './components/crud-contrato/crud-contrato.component';
import { CrudDetalleServicioComponent } from './components/crud-detalleservicio/crud-detalleservicio.component';
import { CrudCategoriaComponent } from './components/crud-categoria/crud-categoria.component';
import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';
import { CrudProveedorComponent } from './components/crud-proveedor/crud-proveedor.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { CrudCobranzaComponent } from './components/crud-cobranza/crud-cobranza.component';
import { CrudCobroComponent } from './components/crud-cobro/crud-cobro.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWeb,
    children: [
      {
        path: 'webInicio',
        component: WebInicioComponent,
      },
      {
        path: 'webServicio',
        component: WebServicioComponent,
      },
      {
        path: 'webProyecto',
        component: WebProyectoComponent,
      },
      {
        path: 'webNosotros',
        component: WebNosotrosComponent,
      },
      { 
        path: 'webContacto', 
        component: WebContactoComponent 
      },
    ],
  },

  { path: 'login', component: LoginComponent },

  {
    path: 'intranet',
    component: LayoutIntranet,
    children: [
      { 
        path: 'inicio', 
        component: IndexComponent 
      },
      {
        path: 'verMantenimientoCategoria',
        component: CrudCategoriaComponent,
      },
      {
        path: 'verMantenimientoCliente',
        component: CrudClienteComponent,
      },
      {
        path: 'verMantenimientoContrato',
        component: CrudContratoComponent,
      },
      {
        path: 'verMantenimientoDetalleServicio',
        component: CrudDetalleServicioComponent,
      },
      {
        path: 'verMantenimientoProducto',
        component: CrudProductoComponent,
      },
      {
        path: 'verMantenimientoProveedor',
        component: CrudProveedorComponent,
      },
      {
        path: 'verMantenimientoServicio',
        component: CrudServicioComponent,
      },
      {
        path: 'verMantenimientoUsuario',
        component: CrudUsuarioComponent,
      },
      {
        path: 'verMantenimientoCobranza',
        component: CrudCobranzaComponent,
      },
      {
        path: 'verMantenimientoCobros',
        component: CrudCobroComponent,
      },
      {
        path: 'DashBoard',
        component: DashBoardComponent,
      },
      {
        path: '**',
        component: WebInicioComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
