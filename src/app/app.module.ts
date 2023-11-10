import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { MatIconModule } from '@angular/material/icon';

import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';

//intranet
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { CrudServicioComponent } from './components/crud-servicio/crud-servicio.component';

//web
import { HeaderComponent } from './public/home/header/header.component';
import { BodyComponent } from './public/home/body/body.component';
import { FooterComponent } from './public/home/footer/footer.component';
import { WebInicioComponent } from './public/components/inicio/inicio.component';
import { WebServicioComponent } from './public/components/servicio/servicio.component';
import { WebProyectoComponent } from './public/components/proyecto/proyecto.component';
import { WebNosotrosComponent } from './public/components/nosotros/nosotros.component';
import { WebContactoComponent } from './public/components/contacto/contacto.component';


import { LayoutWeb } from './layouts/web/layoutweb.component';
import { LayoutIntranet } from './layouts/intranet/layoutintranet.component';
import { IntranetHeaderComponent } from './public/home/header/IntranetHeader.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { CrudCobranzaComponent } from './components/crud-cobranza/crud-cobranza.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,

    CrudClienteComponent,
    CrudUsuarioComponent,
    CrudServicioComponent,
    
    DashBoardComponent,
    
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WebInicioComponent,
    WebServicioComponent,
    WebProyectoComponent,
    WebNosotrosComponent,
    WebContactoComponent,

    //agregado  4/11/2023
    LayoutWeb,
    LayoutIntranet,
    IntranetHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CommonModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
